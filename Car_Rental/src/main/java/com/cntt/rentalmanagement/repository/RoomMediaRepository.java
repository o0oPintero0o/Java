package com.cntt.rentalmanagement.repository;

import com.cntt.rentalmanagement.domain.models.Room;
import com.cntt.rentalmanagement.domain.models.RoomMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface RoomMediaRepository extends JpaRepository<RoomMedia, Long> {

    void deleteAllByRoom(Room room);

}
