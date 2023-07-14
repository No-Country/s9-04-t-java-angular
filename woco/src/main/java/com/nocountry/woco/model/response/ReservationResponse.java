package com.nocountry.woco.model.response;

import com.nocountry.woco.auth.model.entity.UserEntity;
import com.nocountry.woco.model.entity.Cowork;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
public class ReservationResponse{

    private Long id;
    private LocalDate date_before;
    private LocalDate date_after;
    private Double price;
    private Cowork cowork;
    private UserEntity userEntity;
}
