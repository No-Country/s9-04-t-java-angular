package com.nocountry.woco.model.entity;

import com.nocountry.woco.utils.enums.EnumService;
import lombok.*;

import jakarta.persistence.*;
@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Services {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;

}
