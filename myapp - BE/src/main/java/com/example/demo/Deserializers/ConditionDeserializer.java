package com.example.demo.Deserializers;

import com.example.demo.model.enumerations.Condition;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;

public class ConditionDeserializer extends JsonDeserializer<Condition> {

    @Override
    public Condition deserialize(JsonParser jsonParser, DeserializationContext ctxt) throws IOException {
        String value = jsonParser.getText().toUpperCase();
        return Condition.valueOf(value);
    }
}
