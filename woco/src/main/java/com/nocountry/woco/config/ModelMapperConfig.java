package com.nocountry.woco.config;
import com.nocountry.woco.mapper.ContactMapper;
import com.nocountry.woco.mapper.CoworkMapper;
import com.nocountry.woco.mapper.LocationMapper;
import com.nocountry.woco.model.dto.ContactDTO;
import com.nocountry.woco.model.entity.Contact;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
        return mapper;
    }
}