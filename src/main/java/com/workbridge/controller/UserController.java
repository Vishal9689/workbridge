package com.workbridge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.workbridge.model.User;
import com.workbridge.repository.UserRepo;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepo userRepo;

    // 🔥 GET PROFILE
    @GetMapping("/profile/{email}")
    public User getProfile(@PathVariable String email){
        return userRepo.findByEmail(email);
    }

    // 🔥 UPDATE PROFILE
    @PutMapping("/profile")
    public User updateProfile(@RequestBody User updatedUser){

        System.out.println("Incoming Email: " + updatedUser.getEmail());

        User user = userRepo.findByEmail(updatedUser.getEmail());

        if(user == null){
            throw new RuntimeException("User NOT FOUND ❌");
        }

        user.setBio(updatedUser.getBio());
        user.setPhoto(updatedUser.getPhoto());
        user.setPhone(updatedUser.getPhone());
        user.setUpi_id(updatedUser.getUpi_id());

        return userRepo.save(user);
    }
    
    
}