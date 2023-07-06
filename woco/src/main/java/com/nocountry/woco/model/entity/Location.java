package com.nocountry.woco.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "locations")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="latitud",unique = true,nullable = false)
    private String latitud;
    @Column(name="longitud",unique = true,nullable = false)
    private String longitud;
    @Column(name="country",nullable = false)
    private String country;
    @Column(name="province",nullable = false)
    private String province;
    @Column(name="city",nullable = false)
    private String city;
    @Column(name="postal_zip",nullable = false)
    private int postal_zip;
    /*@OneToOne //Esperando la entidad CoWork
    @JoinColumn(name="id_cowork")
    private Cowork cowork;*/
}
