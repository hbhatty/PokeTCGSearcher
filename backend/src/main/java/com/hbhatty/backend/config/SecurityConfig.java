package com.hbhatty.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // @Bean
    // public SecurityFilterChain securityFilterChainForLocal(HttpSecurity http) throws Exception {
    //     http.csrf().disable()
    //         .authorizeHttpRequests()
    //         .anyRequest().permitAll() // Allow all requests without authentication
    //         .and()
    //         .httpBasic().disable(); // Disable HTTP Basic Authentication
    //     return http.build();
    // }
    @Bean
     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
         http
             .csrf().disable()
             .authorizeHttpRequests()
             .anyRequest().permitAll();
         return http.build();
     }
}
