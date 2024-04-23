package com.cntt.rentalmanagement.domain.enums;

public enum RoomStatus {
    HIRED("HIRED"),
    ROOM_RENT("ROOM_RENT"),
    CHECKED_OUT("CHECKED_OUT");


    private String value;

    RoomStatus(String value){
        this.value = value;
    }

    public String getValue(){
        return this.value;
    }
}
