package com.nocountry.woco.model.request;

import com.nocountry.woco.auth.model.entity.UserEntity;
import com.nocountry.woco.model.entity.Cowork;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ReservationRequest {
    private Long id;
    private LocalDate date_before;
    private LocalDate date_after;
    private Double price;
    private Cowork cowork;
    private UserEntity userEntity;
}
