package com.nocountry.woco.model.repository;

import com.nocountry.woco.model.entity.Services;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Services,Long> {

    List<Services> findAllByPrice(Double price);
}
