package com.nocountry.woco.model.entity;

import com.nocountry.woco.auth.model.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date_before;
    private LocalDate date_after;
    private Double price;
    @OneToOne
    private Cowork cowork;
    @OneToOne
    private UserEntity userEntity;
}
