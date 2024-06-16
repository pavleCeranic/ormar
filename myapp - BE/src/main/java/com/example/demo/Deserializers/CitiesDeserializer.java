package com.example.demo.Deserializers;

import com.example.demo.model.enumerations.Cities;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;

public class CitiesDeserializer extends JsonDeserializer<Cities> {

    @Override
    public Cities deserialize(JsonParser jsonParser, DeserializationContext ctxt) throws IOException {
        String value = jsonParser.getText().toUpperCase();
        return Cities.valueOf(value);
    }
}
