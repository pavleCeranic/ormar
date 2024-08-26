package com.example.demo.model;

import com.example.demo.model.enumerations.Cities;
import com.example.demo.model.enumerations.Condition;
import com.example.demo.model.enumerations.State;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String category;
    @Column(nullable = true)
    private double price;
    @Column(nullable = true)
    private String brand; //IMPROVE
    @Column(nullable = true)
    private Cities city;
    @Column(nullable = true)
    private String materials; //IMPROVE
    @Column(nullable = true)
    private Condition condition;
    @Column(nullable = true)
    private State state;
    @Column(nullable = true)
    private String color; //IMPROVE
    @Column(nullable = true)
    private String description;
    @Column(nullable = true)
    private String size; //IMPROVE
    private LocalDateTime dateAdded;
    @Column(nullable = true)
    private String sex;
    @ElementCollection
    @Column(nullable = true)
    private List<Integer> images;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Cities getCity() {
        return city;
    }

    public void setCity(Cities city) {
        this.city = city;
    }

    public String getMaterials() {
        return materials;
    }

    public void setMaterials(String materials) {
        this.materials = materials;
    }

    public Condition getCondition() {
        return condition;
    }

    public void setCondition(Condition condition) {
        this.condition = condition;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public LocalDateTime getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(LocalDateTime dateAdded) {
        this.dateAdded = dateAdded;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public List<Integer> getImages() {
        return images;
    }

    public void setImages(List<Integer> images) {
        this.images = images;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    public String getOwnerUsername() {
        return ownerUsername;
    }

    public void setOwnerUsername(String ownerUsername) {
        this.ownerUsername = ownerUsername;
    }

    @Column(nullable = false)
    private Long ownerId;
    @Column(nullable = false)
    private String ownerUsername;


    // Constructor
    public Article() {
        this.dateAdded = LocalDateTime.now();
    }
}
