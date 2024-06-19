package com.example.demo.model.enumerations;

import com.example.demo.Deserializers.ConditionDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(using = ConditionDeserializer.class)
public enum Condition {
    NEW,
    USED,
    DAMAGED
}
