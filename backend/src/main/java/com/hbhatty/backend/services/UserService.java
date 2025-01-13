// src/main/java/com/yourproject/services/UserService.java
package com.hbhatty.backend.services;

import com.hbhatty.backend.models.Users;
import com.hbhatty.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Users registerUser(String email, String password) {
        if (email == null || password == null || email == "" || password == "") {
            throw new IllegalArgumentException("Password/email are missing/empty!");
        }
        if (userRepository.findByEmail(email).isPresent()) {
            throw new IllegalArgumentException("Email is already in use.");
        }

        String encodedPassword = passwordEncoder.encode(password);
        Users user = new Users(email, encodedPassword);
        return userRepository.save(user);
    }
}
