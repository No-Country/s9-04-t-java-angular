package com.nocountry.woco.service;

import com.nocountry.woco.auth.model.repository.UserRepository;
import com.nocountry.woco.model.entity.Reservation;
import com.nocountry.woco.model.repository.ReservationRepository;
import com.nocountry.woco.model.request.ReservationRequest;
import com.nocountry.woco.model.response.ReservationResponse;
import com.nocountry.woco.service.impl.IReservationService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ReservationService implements IReservationService {
    final ModelMapper modelMapper;
    final ReservationRepository reservationRepository;
    final UserRepository userRepository;

    public ReservationService(ModelMapper modelMapper, ReservationRepository reservationRepository, UserRepository userRepository) {
        this.modelMapper = modelMapper;
        this.reservationRepository = reservationRepository;
        this.userRepository = userRepository;
    }

    @Override
    public ReservationResponse createReservation(ReservationRequest reservationRequest) {

        return null;
    }

    @Override
    public boolean deleteReservation(Long reservationId) {
        return false;
    }

    @Override
    public ReservationResponse updateReservation(Long id, ReservationRequest reservationRequest){
        Reservation existingReservation = reservationRepository.findById(id).orElse(null);
        if (existingReservation != null) {
            modelMapper.getConfiguration().setSkipNullEnabled(true);
            modelMapper.map(reservationRequest, existingReservation);
            Reservation updatedReservation = reservationRepository.save(existingReservation);
            return modelMapper.map(updatedReservation, ReservationResponse.class);
        } else {
            return null;
        }
    }

    @Override
    public List<ReservationResponse> getReservationsByReservationDateAndUserId(Date reservationDate, int userId) {
        return null;
    }

    @Override
    public List<ReservationResponse> getReservationsByUserId(int userId) {
        return null;
    }

    @Override
    public ReservationResponse getReservationById(Long reservationId) {
        return null;
    }

    @Override
    public List<ReservationResponse> getAllReservations() {
        return null;
    }
}
