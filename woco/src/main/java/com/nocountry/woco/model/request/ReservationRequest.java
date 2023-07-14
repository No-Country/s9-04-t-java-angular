package com.nocountry.woco.model.request;

import com.nocountry.woco.model.entity.Cowork;
import lombok.*;

import java.time.LocalDate;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReservationRequest {
    private Long id;
    private LocalDate date_before;
    private LocalDate date_after;
    private Double price;
    private Cowork cowork;
    //private UserRequest userRequest;
}
