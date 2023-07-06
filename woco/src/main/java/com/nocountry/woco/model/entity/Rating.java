package com.nocountry.woco.model.entity;

import lombok.*;
import org.apache.catalina.User;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "ratings")
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private int rating;
    private String comment;

//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;
    @ManyToOne
    @JoinColumn(name = "cowork_id")
    private Cowork cowork;





}
