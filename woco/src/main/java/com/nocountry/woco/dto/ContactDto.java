package com.nocountry.woco.dto;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@Builder
@NoArgsConstructor
@Data
public class ContactDto {
    private int id;


    private String email;

    private String whatsapp;

    private String instagram;

    private String phone;

    private String website;


}
