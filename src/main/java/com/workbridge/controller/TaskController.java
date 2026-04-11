package com.workbridge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;        // ✅ correct
import org.springframework.core.io.UrlResource;     // ✅ correct
import org.springframework.http.HttpHeaders;        // ✅ correct
import org.springframework.http.ResponseEntity;
import com.workbridge.model.Task;
import com.workbridge.model.User;
import com.workbridge.repository.TaskRepo;
import com.workbridge.repository.UserRepo;



import java.io.File;

import java.util.List;


@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {

    @Autowired
    private TaskRepo repo;
    @Autowired
    private UserRepo userRepo;

    @PostMapping(value = "/create", consumes = "multipart/form-data")
    public Task createTask(
            @RequestParam String title,
            @RequestParam String description,
            @RequestParam(required = false) String price,
            @RequestParam String timeline,
            @RequestParam String user_email,
            @RequestParam(required = false) MultipartFile file
    ) {

        String fileUrl = null;

        try {
            if (file != null && !file.isEmpty()) {

                // 🔥 FIXED PATH (MAIN ISSUE SOLVED)
                String uploadDir = System.getProperty("user.dir") + "/uploads/";

                File dir = new File(uploadDir);
                if (!dir.exists()) {
                    dir.mkdirs();
                }

                String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
                String filePath = uploadDir + fileName;

                file.transferTo(new File(filePath));

                // 🔥 CORRECT URL
                fileUrl = "http://localhost:8080/uploads/" + fileName;

                System.out.println("FILE SAVED: " + fileUrl);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        Task task = new Task();

        task.setTitle(title);
        task.setDescription(description);

        int finalPrice = 0;
        try {
            if (price != null && !price.isEmpty()) {
                finalPrice = Integer.parseInt(price);
            }
        } catch (Exception e) {
            finalPrice = 0;
        }

        task.setPrice(finalPrice);
        task.setTimeline(timeline);
        task.setUser_email(user_email);

        task.setStatus("OPEN");
        task.setProgress(0);
        task.setPayment_status("PENDING");

        // 🔥 IMPORTANT
        task.setFile_url(fileUrl);
        task.setSubmission_file(fileUrl);

        return repo.save(task);
    }
    // 🔥 GET ALL TASKS (VERY IMPORTANT)
    @GetMapping("/all")
    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    @PutMapping("/accept/{id}")
    public Task acceptTask(@PathVariable int id, @RequestParam String freelancerEmail) {

        Task t = repo.findById(id).orElseThrow();

        t.setFreelancer_email(freelancerEmail);
        t.setStatus("ACCEPTED");

        // 🔥 SAFE UPI SET
        User user = userRepo.findByEmail(freelancerEmail);
        if(user != null){
            t.setFreelancer_upi(user.getUpi_id());
        }

        return repo.save(t);
    }

    // 🔥 PAYMENT DONE
    @PutMapping("/pay/{id}")
    public Task payTask(@PathVariable int id) {

        Task t = repo.findById(id).orElseThrow();

        t.setPayment_status("DONE");
        t.setStatus("IN_PROGRESS");

        return repo.save(t);
    }

    // 🔥 START WORK
    @PutMapping("/start/{id}")
    public Task start(@PathVariable int id){
        Task t = repo.findById(id).orElseThrow();
        t.setStatus("IN_PROGRESS");
        return repo.save(t);
    }

    // 🔥 PROGRESS UPDATE
    @PutMapping("/progress/{id}")
    public Task progress(@PathVariable int id, @RequestParam int value){
        Task t = repo.findById(id).orElseThrow();
        t.setProgress(value);
        return repo.save(t);
    }

    @PutMapping(value = "/complete/{id}", consumes = "multipart/form-data")
    public Task complete(
            @PathVariable int id,
            @RequestParam(required = false) MultipartFile file
    ){

        Task t = repo.findById(id).orElseThrow();

        if(t.getProgress() < 90){
            throw new RuntimeException("Complete allowed only after 90%");
        }

        try {
            if (file != null && !file.isEmpty()) {

                // 🔥 FIXED PATH
                String uploadDir = System.getProperty("user.dir") + "/uploads/";

                File dir = new File(uploadDir);
                if (!dir.exists()) {
                    dir.mkdirs(); // 🔥 IMPORTANT FIX
                }

                String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
                String filePath = uploadDir + fileName;

                file.transferTo(new File(filePath));

                // 🔥 CORRECT URL
                String fileUrl = "http://localhost:8080/uploads/" + fileName;
                System.out.println("FILE URL: " + fileUrl);
                t.setSubmission_file(fileUrl);

                System.out.println("FILE SAVED: " + fileUrl);
            }
        } catch (Exception e){
            e.printStackTrace();
        }

        t.setStatus("COMPLETED");
        t.setApproval_status("PENDING");

        return repo.save(t);
    }

    // 🔥 USER APPROVE
    @PutMapping("/approve/{id}")
    public Task approve(@PathVariable int id){
        Task t = repo.findById(id).orElseThrow();
        t.setApproval_status("APPROVED");
        return repo.save(t);
    }

    // 🔥 USER REJECT
    @PutMapping("/reject/{id}")
    public Task reject(@PathVariable int id){
        Task t = repo.findById(id).orElseThrow();
        t.setApproval_status("REJECTED");
        t.setStatus("IN_PROGRESS");
        return repo.save(t);
    }

    // 🔥 DELETE (ADMIN)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        repo.deleteById(id);
    }
    
    @PutMapping("/user/updateUpi")
    public User updateUpi(@RequestParam String email, @RequestParam String upi){

        User u = userRepo.findByEmail(email);
        u.setUpi_id(upi);

        return userRepo.save(u);
    }
   
    
    @GetMapping("/download")
    public ResponseEntity<byte[]> downloadFile(@RequestParam String fileName) throws Exception {

        String path = System.getProperty("user.dir") + "/uploads/" + fileName;

        File file = new File(path);

        if (!file.exists()) {
            throw new RuntimeException("File not found");
        }

        byte[] fileData = java.nio.file.Files.readAllBytes(file.toPath());

        return ResponseEntity.ok()
                .header("Content-Disposition", "attachment; filename=\"" + file.getName() + "\"")
                .header("Content-Type", "application/octet-stream")
                .body(fileData);
    }
}