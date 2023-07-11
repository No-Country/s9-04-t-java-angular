package com.nocountry.woco.model.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor(force = true)
@Builder()
@Table(name = "CONTACTS")
public class Contact {

    @Id
    @Column(name = "ID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "EMAIL",length = 2048, nullable = false)
    @NonNull
    private String email;

    @Column(name = "WHATSAPP",length = 2048, nullable = false)
    @NonNull
    private String whatsapp;

    @Column(name = "INSTAGRAM",length = 2048, nullable = false)
    @NonNull
    private String instagram;

    @Column(name = "PHONE",length = 350, nullable = false)
    @NonNull
    private String phone;

    @Column(name = "WEBSITE",length = 2048, nullable = false)
    @NonNull
    private String website;


}
