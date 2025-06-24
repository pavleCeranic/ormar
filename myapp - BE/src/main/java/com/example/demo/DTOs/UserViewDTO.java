package com.example.demo.DTOs;

import com.example.demo.model.User;
import com.example.demo.model.enumerations.Cities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class UserViewDTO {

    private Long id;
    private String username;
    private String email;
    private String password;
    private LocalDateTime dateAdded = LocalDateTime.now();
    private Cities city;
    private String sex;
    private Integer rating;
    private byte[] profileImage;
    private List<Long> favourites = new ArrayList<>();
    private List<Long> activeArticles = new ArrayList<>();
    private List<Long> finishedArticles = new ArrayList<>();
    private Set<String> authorities = new HashSet<>();
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialsNonExpired;
    private boolean enabled;

    public UserViewDTO(PublicUserDTO user) {
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.city = user.getCity();
        this.sex = user.getSex();
        this.rating = user.getRating();
        this.profileImage = user.getProfileImage();
        this.activeArticles = user.getActiveArticles();
        this.finishedArticles = user.getFinishedArticles();
    }

    public UserViewDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.city = user.getCity();
        this.sex = user.getSex();
        this.rating = user.getRating();
        this.profileImage = user.getProfileImage();
        this.favourites = user.getFavourites();
        this.activeArticles = user.getActiveArticles();
//        this.finishedArticles = user.getFinishedArticles();
//        this.authorities = user.getAuthorities();
//        this.accountNonExpired = accountNonExpired;
//        this.accountNonLocked = accountNonLocked;
//        this.credentialsNonExpired = credentialsNonExpired;
//        this.enabled = enabled;
    }

    public UserViewDTO(String username, String email, LocalDateTime dateAdded, Cities city, String sex, Integer rating, byte[] profileImage, List<Long> activeArticles, List<Long> finishedArticles) {
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

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
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

    public List<Long> getFavourites() {
        return favourites;
    }

    public List<Long> getActiveArticles() {
        return activeArticles;
    }

    public List<Long> getFinishedArticles() {
        return finishedArticles;
    }

    public Set<String> getAuthorities() {
        return authorities;
    }

    public boolean isAccountNonExpired() {
        return accountNonExpired;
    }

    public boolean isAccountNonLocked() {
        return accountNonLocked;
    }

    public boolean isCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    public boolean isEnabled() {
        return enabled;
    }
}
