package com.nocountry.woco.model.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor(force = true)
@Builder()
@Table(name = "LOCATIONS")
public class  Location {
    @Id
    @Column(name = "ID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "CITY", nullable = false)
    @NonNull
    private String city;

    @Column(name = "PROVINCE", nullable = false)
    private String province;


    @Column(name = "COUNTRY", nullable = false)
    @NonNull
    private String country;
/*  @OneToMany
    private List<Cowork> coworkList;
*/
}
