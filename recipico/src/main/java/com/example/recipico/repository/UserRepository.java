package com.example.recipico.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.recipico.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
