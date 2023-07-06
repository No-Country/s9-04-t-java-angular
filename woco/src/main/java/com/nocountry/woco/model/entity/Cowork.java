package com.nocountry.woco.model.entity;

import java.util.Collection;
import java.util.List;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Cowork")
public class Cowork {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="latitud",unique = true,nullable = false)
    private Long latitud;
/*    @Column(name="location",unique = true,nullable = false)
    private Location location;*/
    @Column(name="price_per_hour",nullable = false)
    private Double pricePerHour;

//    @ManyToOne(cascade = CascadeType.ALL)
//    private User user;

    @OneToMany(mappedBy = "cowork",cascade = CascadeType.ALL)
    private List<Rating> ratings;


    @ManyToMany(mappedBy = "cowork",cascade = CascadeType.ALL)
    private List<Services> services;


    private void addToServices(Services service){
        this.services.add(service);
    }
    private void removeFromServices(Services service){
        this.services.remove(service);
    }
    private void addToRatings(Rating rating){
        this.ratings.add(rating);
    }
    private void removeFromRatings(Rating rating){
        this.ratings.remove(rating);
    }
}
