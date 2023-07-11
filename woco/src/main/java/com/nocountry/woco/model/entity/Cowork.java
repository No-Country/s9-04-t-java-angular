package com.nocountry.woco.model.entity;

import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "COWORKS")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Cowork {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;

    @Column(name = "NAME", length = 350, nullable = false)
    @NonNull
    @Builder.Default
    private String name="Default name";

    @Column(name = "DESCRIPTION", columnDefinition="TEXT", nullable = false)
    @Lob
    private String description;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "COWORK_ID")
    @Builder.Default
    private Set<Photos> photos = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "COWORK_ID")
    @Builder.Default
    private Set<Services> services = new HashSet<>();


    @ManyToOne(cascade = CascadeType.MERGE,fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "LOCATION_ID", nullable = false)
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    @NonNull
    @Builder.Default
    private Location location=new Location();


  @ManyToOne(cascade = CascadeType.MERGE,fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "CONTACT_ID", nullable = false)
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    @NonNull
    @Builder.Default
    private Contact contact=new Contact();


    @Column(name = "ADDRESS", length = 350)
    private String address;


    @Column(name = "ZIP_CODE")
    private String zipCode;

    @Column(name = "LATITUDE")
    private float latitude;
    @Column(name = "LONGITUDE")
    private float longitude;

    @Column(name = "PRICE")
    private double pricePerDay;

    @Column(name = "CAPACITY")
    private int capacity;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "COWORK_ID")
    @Builder.Default
    private Set<Rating> ratings = new HashSet<>();




}

