package com.cntt.rentalmanagement.repository;

import com.cntt.rentalmanagement.domain.enums.RoomStatus;
import com.cntt.rentalmanagement.domain.models.Room;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.math.BigDecimal;

public interface RoomRepositoryCustom {
    Page<Room> searchingRoom(String title, Long userId, Pageable pageable);

    Page<Room> searchingRoomForAdmin(String title,Boolean approve, Pageable pageable);

    Page<Room> searchingRoomForCustomer(String title, BigDecimal price,Long categoryId, Long userId, Pageable pageable, Long locationId, Long colorId);


    Page<Room> getAllRentOfHome(Long userId, Pageable pageable);

}
