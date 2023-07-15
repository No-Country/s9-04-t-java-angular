package com.nocountry.woco.model.entity;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import jakarta.persistence.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "locations")
public class  Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "city", nullable = false)
    @NotNull
    private String city;

    @Column(name = "province", nullable = false)
    private String province;


    @Column(name = "country", nullable = false)
    @NotNull
    private String country;
/*  @OneToMany
    private List<Cowork> coworkList;
*/
}
