package com.example.demo.model;

import com.example.demo.model.enumerations.Cities;
import com.example.demo.model.enumerations.Condition;
import com.example.demo.model.enumerations.Currency;
import com.example.demo.model.enumerations.State;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private double price;
    private Currency currency;
    private String brand; //IMPROVE
    private Cities city;
    private String materials;
    private Condition condition;
    private State state;
    private String color;
    private String description;
    private String size; //IMPROVE
    private LocalDateTime dateAdded;
    //private String tags;
    //images
    //user

}
