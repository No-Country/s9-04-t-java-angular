package com.nocountry.woco.service.spec;


import com.nocountry.woco.model.entity.Cowork;
import com.nocountry.woco.model.entity.Rating;
import com.nocountry.woco.model.entity.Services;
import com.nocountry.woco.utils.enums.EnumService;
import jakarta.persistence.criteria.*;
import org.springframework.data.jpa.domain.Specification;

import java.util.HashSet;
import java.util.Set;

public class CoworkSpecification {
    public static Specification<Cowork> hasBetterRating(Double maxRating) {
        return (root, query, criteriaBuilder) -> {
            Join<Cowork, Rating> ratingsJoin = root.join("ratings");
            Expression<Double> averageRating = criteriaBuilder.avg(ratingsJoin.get("rating"));
            query.groupBy(root.get("id"));
            query.having(criteriaBuilder.equal(criteriaBuilder.function("FLOOR", Long.class, averageRating), maxRating.longValue()));
            return criteriaBuilder.conjunction();
        };
    }
    public static Specification<Cowork> hasPricesBetween(Double minPrice, Double maxPrice) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.between(root.get("pricePerDay"),minPrice,maxPrice);
    }
}
