package com.example.demo.DTOs;

import com.example.demo.model.enumerations.Cities;

import java.time.LocalDateTime;
import java.util.List;

public class PublicUserDTO {

    private String username;
    private String email;
    private LocalDateTime dateAdded;
    private Cities city;
    private String sex;
    private Integer rating;
    private byte[] profileImage;
    private List<Long> activeArticles;
    private List<Long> finishedArticles;

    public PublicUserDTO(String username, String email, LocalDateTime dateAdded, Cities city, String sex, Integer rating, byte[] profileImage, List<Long> activeArticles, List<Long> finishedArticles) {
        this.username = username;
        this.email = email;
        this.dateAdded = dateAdded;
        this.city = city;
        this.sex = sex;
        this.rating = rating;
        this.profileImage = profileImage;
        this.activeArticles = activeArticles;
        this.finishedArticles = finishedArticles;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public LocalDateTime getDateAdded() {
        return dateAdded;
    }

    public Cities getCity() {
        return city;
    }

    public String getSex() {
        return sex;
    }

    public Integer getRating() {
        return rating;
    }

    public byte[] getProfileImage() {
        return profileImage;
    }

    public List<Long> getActiveArticles() {
        return activeArticles;
    }

    public List<Long> getFinishedArticles() {
        return finishedArticles;
    }
}
