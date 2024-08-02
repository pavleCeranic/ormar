package com.example.demo.model;

import com.example.demo.model.enumerations.Cities;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Table(name = "\"user\"")
@Entity
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, unique = true)
    private String username;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String password;
    private final LocalDateTime dateAdded = LocalDateTime.now();
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
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "authorities", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "authority")
    private Set<String> authorities = new HashSet<>();
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialsNonExpired;
    private boolean enabled;

    public User() {
    }

    public User(@JsonProperty("username") String username,
                @JsonProperty("password") String password,
                @JsonProperty("email") String email,
                @JsonProperty("authorities") Set<String> authorities ){

        this.password = password;
        this.username = username;
        this.email = email;
        this.enabled = true;
        this.authorities = authorities;
        this.accountNonExpired = true;
        this.accountNonLocked = true;
        this.credentialsNonExpired = true;

    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities.stream().map(SimpleGrantedAuthority::new).toList();
    }

    public void setAuthorities(Set<String> newAuthorities) { // TODO: for protected endpoint that creates admins
        authorities = newAuthorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String encodedPassword) {
        this.password = encodedPassword;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return accountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return accountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
}
