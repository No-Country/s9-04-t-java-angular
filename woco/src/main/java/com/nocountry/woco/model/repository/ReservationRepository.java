package com.nocountry.woco.model.repository;

import com.nocountry.woco.model.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Long> {

    List<Reservation> findReservationsByUserEntity_Id(Long userId);
}
