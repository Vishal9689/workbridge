package com.workbridge.controller;

import com.workbridge.model.Task;
import com.workbridge.repository.TaskRepo;
import java.util.HashMap;
import java.util.Map;
import com.razorpay.RazorpayClient;
import com.razorpay.Order;
import org.json.JSONObject;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.RazorpayClient;

@RestController
	@RequestMapping("/payment")
@CrossOrigin(origins = "http://localhost:5174")
	public class PaymentController {

	    private final TaskRepo taskRepo;


	PaymentController(TaskRepo taskRepo) {
		this.taskRepo = taskRepo;
	}


		@PostMapping("/create-order")
	    public Map<String, Object> createOrder(@RequestBody Map<String, Object> data) throws Exception {

	        int amount = (int) data.get("amount");

	        RazorpayClient client = new RazorpayClient("rzp_test_ScDneVPDnoR7C4", "ifL3tCDm6xqWVsaqUZIdZ0l5");

	        JSONObject options = new JSONObject();
	        options.put("amount", amount * 100);
	        options.put("currency", "INR");
	        options.put("receipt", "txn_" + System.currentTimeMillis());

	        Order order = client.orders.create(options);

	        Map<String, Object> res = new HashMap<>();
	        res.put("id", order.get("id"));
	        res.put("amount", order.get("amount"));

	        return res;
	    }
	    
	    
	    @PostMapping("/success")
	    public String paymentSuccess(@RequestBody Map<String, Object> data) {

	        int taskId = (int) data.get("taskId");

	        Task task = taskRepo.findById(taskId).get();

	        task.setPayment_status("PAID");

	        taskRepo.save(task);

	        return "OK";
	    }
	}

