package com.nocountry.woco.service.impl;

import com.nocountry.woco.model.request.ReservationRequest;
import com.nocountry.woco.model.response.ReservationResponse;

import java.util.Date;
import java.util.List;

public interface IReservationService {
    ReservationResponse createReservation(ReservationRequest reservationRequest);
    boolean deleteReservation(Long reservationId);
    ReservationResponse updateReservation(Long id, ReservationRequest reservationRequest);

    List<ReservationResponse> getReservationsByReservationDateAndUserId(Date reservationDate, int userId);

    List<ReservationResponse> getReservationsByUserId(int userId);
    ReservationResponse getReservationById(Long reservationId);
    List<ReservationResponse> getAllReservations();

}
