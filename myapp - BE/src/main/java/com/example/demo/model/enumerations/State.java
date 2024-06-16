package com.example.demo.model.enumerations;

import com.example.demo.Deserializers.StateDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(using = StateDeserializer.class)
public enum State {
    AVAILABLE,
    SOLD
}
