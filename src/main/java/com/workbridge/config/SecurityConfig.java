package com.workbridge.config;

import com.workbridge.security.JwtFilter;
import org.springframework.context.annotation.*;
import org.springframework.boot.web.servlet.FilterRegistrationBean;

@Configuration
public class SecurityConfig {

    @Bean
    public FilterRegistrationBean<JwtFilter> jwtFilter() {

        FilterRegistrationBean<JwtFilter> reg = new FilterRegistrationBean<>();

        reg.setFilter(new JwtFilter());
        reg.addUrlPatterns("/*");

        reg.setEnabled(true); // 🔥 MOST IMPORTANT

        return reg;
    }
}