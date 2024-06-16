package com.example.demo.Deserializers;

import com.example.demo.model.enumerations.State;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import java.io.IOException;

public class StateDeserializer extends JsonDeserializer<State> {

    @Override
    public State deserialize(JsonParser jsonParser, DeserializationContext ctxt) throws IOException {
        String value = jsonParser.getText().toUpperCase();
        return State.valueOf(value);
    }
}