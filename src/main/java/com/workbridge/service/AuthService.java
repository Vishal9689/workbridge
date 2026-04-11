package com.workbridge.service;

import com.workbridge.dto.LoginRequest;
import com.workbridge.dto.RegisterRequest;

public interface AuthService {

    String register(RegisterRequest req);

    String login(LoginRequest req);
}