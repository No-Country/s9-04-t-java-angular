package com.nocountry.woco.dto;

import com.nocountry.woco.model.entity.Rating;
import lombok.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class CoworkDto {
    private int id;
    private String name;
    private String description;
    //    private Set<PhotosDto> photosDto = new HashSet<>();
    private LocationDto category;
    private ContactDto contact;
    private String address;
    private float latitude;
    private float longitude;
    private double pricePerDay;
    private int capacity;
    //   private Set<RatingDto> ratingsDto = new HashSet<>();
    private String zipCode;
}