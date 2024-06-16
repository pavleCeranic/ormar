package com.example.demo.model.enumerations;

import com.example.demo.Deserializers.CitiesDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(using = CitiesDeserializer.class)
public enum Cities {
    SARAJEVO,
    BANJA_LUKA,
    TUZLA,
    ZENICA,
    MOSTAR,
    ISTOCNO_SARAJEVO,
    SREBRENIK,
    BIHAC,
    BRCKO,
    BIJELJINA,
    PRIJEDOR,
    TREBINJE,
    TRAVNIK,
    KISELJAK,
    DOBOJ,
    CAZIN,
    BUGOJNO,
    VELIKA_KLADUSA,
    VISOKO,
    GORAZDE,
    KONJIC,
    GRACANICA,
    GRADACAC,
    BOSANSKA_KRUPA,
    MRKONJIC_GRAD,
    FOCA,
    ZAVIDOVICI,
    ZIVINICE,
    SANSKI_MOST,
    GRADISKA,
    BILECA,
    LUKAVAC,
    KAKANJ,
    LIVNO,
    ODZAK,
    SIPOVO,
    PROZOR,
    NOVI_TRAVNIK,
    ZVORNIK
}
