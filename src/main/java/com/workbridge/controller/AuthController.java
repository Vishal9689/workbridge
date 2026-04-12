
package com.workbridge.controller;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workbridge.dto.LoginRequest;
import com.workbridge.dto.RegisterRequest;
import com.workbridge.model.User;
import com.workbridge.repository.UserRepo;
import com.workbridge.security.JwtUtil;
import com.workbridge.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")   // 🔥 IMPORTANT FIX
public class AuthController {

    @Autowired
    private AuthService authService;
    
    @Autowired
    private UserRepo userRepo ;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest req){
        System.out.println("REGISTER API HIT 🔥");
        return authService.register(req);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User user){
        User existing = userRepo.findByEmail(user.getEmail());

        if(existing == null || !existing.getPassword().equals(user.getPassword())){
            throw new RuntimeException("Invalid credentials ❌");
        }

        JwtUtil jwt = new JwtUtil();
        String token = jwt.generateToken(existing.getEmail());

        Map<String, Object> res = new HashMap<>();
        res.put("email", existing.getEmail());
        res.put("photo", existing.getPhoto());
        res.put("token", token);

        return res;
    }
}