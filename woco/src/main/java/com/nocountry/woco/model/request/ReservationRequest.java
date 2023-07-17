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
    private LocalDate dateBefore;
    private LocalDate dateAfter;
    private Double price;
    private Cowork cowork;
    //private UserRequest userRequest;
}
