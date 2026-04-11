package com.workbridge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workbridge.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {

	 User findByEmail(String email);
}
