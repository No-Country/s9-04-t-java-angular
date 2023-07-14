package com.nocountry.woco.service.impl;

import com.nocountry.woco.model.dto.CoworkDto;
import com.nocountry.woco.model.entity.Cowork;
import com.nocountry.woco.model.exception.ResourceNotFoundException;
import com.nocountry.woco.mapper.CoworkMapper;
import com.nocountry.woco.model.repository.CoworkRepository;
import com.nocountry.woco.service.CoworkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CoworkServiceImpl implements CoworkService {

    @Autowired
    private CoworkRepository coworkRepository;

    @Autowired
    private CoworkMapper coworkMapper;

    @Override
    public List<CoworkDto> getAll()
    {
        return coworkMapper.toCoworksDTO(coworkRepository.findAll());
    }

    @Override
    public CoworkDto getById(long id) throws ResourceNotFoundException {
        Cowork cowork = coworkRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("cowork with id " + id + " not found"));
        return coworkMapper.toCoworkDTO(cowork);
    }

    @Override
    public CoworkDto post(Cowork cowork) {

        Cowork savedCowork = coworkRepository.save(cowork);
        return coworkMapper.toCoworkDTO(savedCowork);
    }

    @Override
    public CoworkDto patch(long id, Cowork cowork) throws ResourceNotFoundException {
        Cowork existingCowork = coworkRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cowork with id " + id + " not found"));
        if (cowork.getName() != null) {
            existingCowork.setName(cowork.getName());
        }
        existingCowork.setDescription(cowork.getDescription());
        existingCowork.setCapacity(cowork.getCapacity());
        existingCowork.setLatitude(cowork.getLatitude());
        existingCowork.setLongitude(cowork.getLongitude());
        existingCowork.setPricePerDay(cowork.getPricePerDay());
        existingCowork.setAddress(cowork.getAddress());
        existingCowork.setRatings(cowork.getRatings());
        existingCowork.setZipCode(cowork.getZipCode());
        if (cowork.getPhotos() != null) {
            existingCowork.setPhotos(cowork.getPhotos());
        }

        if (cowork.getLocation() != null) {
            existingCowork.setLocation(cowork.getLocation());
        }
        if (cowork.getServices()!= null) {
            existingCowork.setServices(cowork.getServices());
        }
        if (cowork.getContact() != null) {
            existingCowork.setContact(cowork.getContact());
        }
        Cowork updatedCowork = coworkRepository.save(existingCowork);
        return coworkMapper.toCoworkDTO(updatedCowork);
    }

    @Override
    public CoworkDto delete(long id) throws ResourceNotFoundException {
        Cowork coworkToDelete = coworkRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cowork with id " + id + " not found"));
        coworkRepository.delete(coworkToDelete);
        return coworkMapper.toCoworkDTO(coworkToDelete);
    }

    @Override
    public List<CoworkDto> getByServices(long id) {
        return coworkMapper.toCoworksDTO(coworkRepository.findByServices_id(id));
    }

    @Override
    public List<CoworkDto> getByLocation(long id) {
        return coworkMapper.toCoworksDTO(coworkRepository.findByLocation_id(id));
    }

    @Override
    public List<CoworkDto> getByNameContaining(String title) {
        return coworkMapper.toCoworksDTO(coworkRepository.findByNameContaining(title));
    }

    @Override
    public List<CoworkDto> getByLatitudeLongitudeAndDistance(float latitude, float longitude, float distance) {
        return coworkMapper.toCoworksDTO(coworkRepository.findByLatitudeLongitudeAndDistance(latitude, longitude, distance));
    }

    @Override
    public List<CoworkDto> getByLatitudeLongitudeDistanceAndServiceId(float latitude, float longitude, float distance, long serviceId) {
        return coworkMapper.toCoworksDTO(coworkRepository.findByLatitudeLongitudeDistanceAndService(latitude, longitude, distance, serviceId));
    }

    @Override
    public List<CoworkDto> getByServiceIdAndLocationId(long serviceId, long locationId) {
        return coworkMapper.toCoworksDTO(coworkRepository.findByServicesIdAndCityId(serviceId, locationId));
    }


}
