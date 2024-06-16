package com.example.demo.model;

import com.example.demo.model.enumerations.Cities;
import com.example.demo.model.enumerations.Condition;
import com.example.demo.model.enumerations.State;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Data
@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
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
    @Column(nullable = true)
    private LocalDateTime dateAdded;
    @Column(nullable = true)
    private String sex;
    @Column(nullable = true)
    private ArrayList<Integer> images;
    //private String tags;
    //images
    //user

}
