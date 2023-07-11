package com.nocountry.woco.model.repository;

import com.nocountry.woco.model.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location,Long > {

    @Query(value = "SELECT * FROM locations as l  WHERE l.city LIKE :search OR  l.province LIKE :search OR  l.country LIKE :search", nativeQuery = true)
    List<Location> findAllByCityOrProvinceOrCountryContaining(@Param("search") String search);

    List<Location> findByLocationContaining(String location);

}
