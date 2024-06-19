package com.example.demo.Deserializers;

import com.example.demo.model.enumerations.Cities;
import com.example.demo.model.enumerations.Colors;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;

public class ColorsDeserializer extends JsonDeserializer<Colors> {
    @Override
    public Colors deserialize(JsonParser jsonParser, DeserializationContext ctxt) throws IOException {
        String value = jsonParser.getText().toUpperCase();
        return Colors.valueOf(value);
    }
}
