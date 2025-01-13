// src/main/java/com/yourproject/controllers/AuthController.java
package com.hbhatty.backend.controllers;

import com.hbhatty.backend.models.Users;
import com.hbhatty.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Users user) {
        try {
            userService.registerUser(user.getEmail(), user.getPassword());
            return ResponseEntity.ok("User registered successfully!");
        } catch (IllegalArgumentException e) {
            if (user.getEmail() == null || user.getPassword() == null || user.getEmail() == "" || user.getPassword() == "") {
                throw new IllegalArgumentException("Password/email are missing/empty!");
            }
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
