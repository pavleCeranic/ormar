package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.security.Principal;
import java.security.SecureRandom;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody User user) throws Exception {

        try {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            User createdUser = userService.createUser(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
        }

    }

    @GetMapping("/login")
    public RedirectView login() {
        return new RedirectView("http://localhost:3000/register");
    }

    @GetMapping("/login-success")
    public User successLogin(Principal principal) {
        return (User) ((Authentication) principal).getPrincipal();
    }

    @GetMapping("/login-failure")
    public String loginFail() {

        return "fail";
    }

    @GetMapping("/logout-success")
    public String logout() {
        return "good logout";
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/registerAdmin")
    public String createAdmin() throws Exception {

//        User newAdmin = userService.createUser(user);
        return "good";
    }

    @GetMapping("/mydomain")
    public String mydomain(HttpSession session, Principal principal) throws Exception {
        User user = (User) ((Authentication) principal).getPrincipal();

        // Get authorities
        Collection<GrantedAuthority> authorities = (Collection<GrantedAuthority>) user.getAuthorities();

        return "good " + principal.getName() + ' ' + authorities.toString();
    }

    @GetMapping("/get/{username}")
    public User getUserByUsername(@PathVariable String username, Principal principal) throws Exception {
        if (!username.equals(principal.getName())) {
            throw new Exception("Not Logged in");
        } else {
            return userService.loadUserByUsername(username);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) throws Exception {
        Optional<User> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User updateUserRequest) throws Exception {
        try {
            System.out.println(updateUserRequest.getUsername());
            System.out.println(updateUserRequest.getPassword());
            System.out.println(updateUserRequest.getUsername());
            User updatedUser = userService.updateUser(updateUserRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body(updatedUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<LinkedHashMap<String, Object>> deleteUser(@PathVariable Long id) throws Exception {

        LinkedHashMap<String, Object> response = new LinkedHashMap<>(Map.of(
                "id", id.toString()
        ));

        try {
            userService.deleteUser(id);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception e) {
            response.put("msg", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

}
