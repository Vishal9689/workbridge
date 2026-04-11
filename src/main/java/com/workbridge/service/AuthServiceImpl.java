package com.workbridge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.workbridge.dto.LoginRequest;
import com.workbridge.dto.RegisterRequest;
import com.workbridge.model.User;
import com.workbridge.repository.UserRepo;
import com.workbridge.security.JwtUtil;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired   // 🔥 IMPORTANT
    private UserRepo userRepo;

    @Override
    public String register(RegisterRequest req){

        if(userRepo.findByEmail(req.getEmail()) != null){
            throw new RuntimeException("Email already registered ❌");
        }

        User user = new User();
        user.setName(req.getName());
        user.setEmail(req.getEmail());
        user.setPassword(req.getPassword());
        user.setRole(req.getRole());

        userRepo.save(user);

        return "Registered Successfully ✅";
    }
    
    @Override
    public String login(LoginRequest req){

        User user = userRepo.findByEmail(req.getEmail());

        if(user != null && user.getPassword().equals(req.getPassword())){

            JwtUtil jwt = new JwtUtil();
            return jwt.generateToken(user.getEmail());
        }

        throw new RuntimeException("Invalid Email or Password ❌");
    }
}