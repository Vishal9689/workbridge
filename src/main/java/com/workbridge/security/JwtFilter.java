package com.workbridge.security;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

public class JwtFilter implements Filter {

    private JwtUtil jwtUtil = new JwtUtil();

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;

        String path = request.getRequestURI();

        // 🔥 DEBUG
        System.out.println("API HIT: " + path);

        //public  api
        if (path.startsWith("/auth") ||
        	    path.startsWith("/upload") ||
        	    path.startsWith("/user") ||
        	    path.startsWith("/tasks")) {

        	    chain.doFilter(req, res);
        	    return;
        	}
        String header = request.getHeader("Authorization");

        if (header != null && header.startsWith("Bearer ")) {

            String token = header.substring(7);

            try {
                String email = jwtUtil.extractEmail(token);
                System.out.println("Valid User: " + email);

                chain.doFilter(req, res);

            } catch (Exception e){
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                response.getWriter().write("Invalid Token ❌");
            }

        } else {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            response.getWriter().write("Token Missing ❌");
        }
    }
}