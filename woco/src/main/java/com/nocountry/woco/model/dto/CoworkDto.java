package com.nocountry.woco.model.dto;

import lombok.*;


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
    private ContactDTO contact;
    private String address;
    private float latitude;
    private float longitude;
    private double pricePerDay;
    private int capacity;
    //   private Set<RatingDto> ratingsDto = new HashSet<>();
    private String zipCode;
}