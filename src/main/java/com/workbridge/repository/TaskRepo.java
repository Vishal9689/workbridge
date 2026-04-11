package com.workbridge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.workbridge.model.Task;

public interface TaskRepo extends JpaRepository<Task, Integer> {
}