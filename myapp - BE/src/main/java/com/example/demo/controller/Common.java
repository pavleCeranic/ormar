package com.example.demo.controller;

import com.example.demo.model.User;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.Optional;

@RestController
@AllArgsConstructor
@CrossOrigin
public class Common {

    @GetMapping("/getPrincipal")
    public Optional<User> getPrincipal(Principal principal){

        if(principal == null) {
            return Optional.empty();
        } else {
            User user = (User) ((Authentication) principal).getPrincipal();

            return Optional.of(user);
        }
    }
}
