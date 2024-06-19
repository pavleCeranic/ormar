package com.example.demo.model;

import com.example.demo.model.enumerations.Cities;
import jakarta.persistence.*;
import lombok.Data;

import java.io.ByteArrayInputStream;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Objects;

@Data
@Table(name = "\"user\"")
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String username;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    private LocalDateTime dateAdded;
    @Column(nullable = true)
    private Cities city;
    @Column(nullable = true)
    private String sex;
    @Column(nullable = true)
    private Integer rating;
    @Column(nullable = true)
    @Lob
    private byte[] profileImage;
    @Column(nullable = true, name = "favourites_articles", columnDefinition = "integer[]")
    private List<Integer> favourites;
    @Column(nullable = true, name = "active_articles", columnDefinition = "integer[]")
    private List<Integer> activeArticles;
    @Column(nullable = true, name = "finished_articles", columnDefinition = "integer[]")
    private List<Integer> finishedArticles;

    public User() {
        this.dateAdded = LocalDateTime.now();
    }

    public void checkValidity() throws Exception {

        String errorMsg = "";
//        if (this.password.isBlank()) {
//            errorMsg += "Password cannot be empty!__";
//        }
//
//        if (this.email.isBlank()) {
//            errorMsg += "Email cannot be empty!__";
//        }
//
//        if (this.username.isBlank()) {
//            errorMsg += "Username cannot be empty!";
//        }


        if (!errorMsg.isBlank()) {
            throw new Exception(errorMsg);
        }

    }

}
