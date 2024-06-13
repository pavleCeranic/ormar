package com.example.demo.model;

import com.example.demo.model.enumerations.Cities;
import com.example.demo.model.enumerations.Condition;
import com.example.demo.model.enumerations.Currency;
import com.example.demo.model.enumerations.State;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @Column(nullable = true)
    private double price;
    @Column(nullable = true)
    private Currency currency;
    @Column(nullable = true)
    private String brand; //IMPROVE
    @Column(nullable = true)
    private Cities city;
    @Column(nullable = true)
    private String materials;
    @Column(nullable = true)
    private Condition condition;
    @Column(nullable = true)
    private State state;
    @Column(nullable = true)
    private String color;
    @Column(nullable = true)
    private String description;
    @Column(nullable = true)
    private String size; //IMPROVE
    @Column(nullable = true)
    private LocalDateTime dateAdded;
    //private String tags;
    //images
    //user

}
