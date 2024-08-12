package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public User createUser(User newUser) throws Exception {
        try {
            return userRepository.save(newUser);
        } catch (Exception e) {
            throw new Exception("Failed to create user", e);
        }
    }

    public Optional<User> getUserById(Long id) throws Exception {
        try {
            return userRepository.findById(id);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Transactional
    public User updateUser(User user) throws Exception {
        try {
            return userRepository.save(user);
        } catch (Exception e) {
            System.out.println("Ne mogu da sacuvam promjene na Useru"
            );
            throw new Exception("Failed to update user: ", e);
        }
    }

    public void deleteUser(Long id) throws Exception {
        try {
            userRepository.deleteById(id);
        } catch (Exception e) {
            throw new Exception("Failed to delete User: ", e);
        }
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }

        return user;
    }
}
