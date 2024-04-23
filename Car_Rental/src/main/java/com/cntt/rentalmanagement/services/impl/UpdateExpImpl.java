package com.cntt.rentalmanagement.services.impl;

import com.cntt.rentalmanagement.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Service
public class UpdateExpImpl {

    @Autowired
    private RoomRepository roomRepository;

    // Existing methods for getAllAvailableRooms() and checkOutRoom()

    // Add the new updateRoomStatusWithSql() method
    public void updateRoomStatusWithSql() {
        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/rental_home", "root", "admin");
             PreparedStatement stmt = conn.prepareStatement("UPDATE room r LEFT JOIN contract c ON r.id = c.id SET r.status = 'CHECKED_OUT' WHERE c.end_date < CURRENT_DATE")) {
            stmt.executeUpdate();
            System.out.println("Rooms with expired contracts updated to CHECKED_OUT.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
