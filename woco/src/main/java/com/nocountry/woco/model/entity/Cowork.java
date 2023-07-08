package com.nocountry.woco.model.entity;

import java.util.List;
import lombok.*;
import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cowork {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private Long latitud;
    private Long longitud;
    private String zip_code;
    private Double pricePerDay;
    private Integer capacity;

    @ManyToOne
    private Location location;

    @OneToMany
    private List<Rating> ratings;

    @OneToMany
    private List<Services> services;

}
