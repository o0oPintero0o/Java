package com.cntt.rentalmanagement.repository;

import com.cntt.rentalmanagement.domain.enums.RoomStatus;
import com.cntt.rentalmanagement.domain.models.Room;
import com.cntt.rentalmanagement.domain.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface RoomRepository extends JpaRepository<Room, Long>, RoomRepositoryCustom{
    long countAllByUser(User user);

    long count();
    long countAllByStatusAndUser(RoomStatus status, User user);

    Room[] findByUser(User user);

    long countByIsApprove(Boolean isApprove);
//    @Modifying  // Required for update queries
//    @Query(value = "" +
//            "UPDATE rental_home.room r " +
//            "LEFT JOIN rental_home.contract c ON r.id = c.room_id " +
//            "SET r.status = 'CHECKED_OUT' " +
//            "WHERE c.end_date < curdate()", nativeQuery = true)



}
