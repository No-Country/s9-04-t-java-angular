package com.nocountry.woco.modelTest;


import com.nocountry.woco.model.entity.*;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CoworkTest {

    @Test
    public void testCoworkGettersAndSetters() {
        // Create a test cowork
        Location location = Location.builder()
                .id(1)
                .city("Test City")
                .province("Test Province")
                .country("Test Country")
                .build();

        Contact contact = Contact.builder()
                .id(1L)
                .email("test@example.com")
                .whatsapp("123456789")
                .instagram("test_user")
                .phone("987654321")
                .website("www.example.com")
                .build();

        Set<Photos> photos = new HashSet<>();
        Photos photo1 = new Photos();
        photo1.setId(1L);
        photo1.setUrl("photo1.jpg");
        Photos photo2 = new Photos();
        photo2.setId(2L);
        photo2.setUrl("photo2.jpg");
        photos.add(photo1);
        photos.add(photo2);

        Set<Services> services = new HashSet<>();
        Services service1 = new Services();
        service1.setId(1L);
        service1.setName("Service 1");
        Services service2 = new Services();
        service2.setId(2L);
        service2.setName("Service 2");
        services.add(service1);
        services.add(service2);

        Set<Rating> ratings = new HashSet<>();
        Rating rating1 = new Rating();
        rating1.setId(1L);
        rating1.setRating(4);
        Rating rating2 = new Rating();
        rating2.setId(2L);
        rating2.setRating(5);
        ratings.add(rating1);
        ratings.add(rating2);

        Cowork cowork = Cowork.builder()
                .id(1)
                .name("Test Cowork")
                .description("Test description")
                .photos(photos)
                .services(services)
                .location(location)
                .contact(contact)
                .address("Test Address")
                .zipCode("123456")
                .latitude(1.2345f)
                .longitude(2.3456f)
                .pricePerDay(100.0)
                .capacity(50)
                .ratings(ratings)
                .build();

        // Verify the getters
        assertEquals(1, cowork.getId());
        assertEquals("Test Cowork", cowork.getName());
        assertEquals("Test description", cowork.getDescription());
        assertEquals(photos, cowork.getPhotos());
        assertEquals(services, cowork.getServices());
        assertEquals(location, cowork.getLocation());
        assertEquals(contact, cowork.getContact());
        assertEquals("Test Address", cowork.getAddress());
        assertEquals("123456", cowork.getZipCode());
        assertEquals(1.2345f, cowork.getLatitude());
        assertEquals(2.3456f, cowork.getLongitude());
        assertEquals(100.0, cowork.getPricePerDay());
        assertEquals(50, cowork.getCapacity());
        assertEquals(ratings, cowork.getRatings());

        // Set new values
        cowork.setId(2);
        cowork.setName("New Cowork");
        cowork.setDescription("New description");
        cowork.setPhotos(new HashSet<>());
        cowork.setServices(new HashSet<>());
        cowork.setLocation(new Location());
        cowork.setContact(new Contact());
        cowork.setAddress("New Address");
        cowork.setZipCode("654321");
        cowork.setLatitude(3.4567f);
        cowork.setLongitude(4.5678f);
        cowork.setPricePerDay(200.0);
        cowork.setCapacity(100);
        cowork.setRatings(new HashSet<>());

        // Verify the setters
        assertEquals(2, cowork.getId());
        assertEquals("New Cowork", cowork.getName());
        assertEquals("New description", cowork.getDescription());
        assertEquals(new HashSet<>(), cowork.getPhotos());
        assertEquals(new HashSet<>(), cowork.getServices());
        assertEquals(new Location(), cowork.getLocation());
        assertEquals(new Contact(), cowork.getContact());
        assertEquals("New Address", cowork.getAddress());
        assertEquals("654321", cowork.getZipCode());
        assertEquals(3.4567f, cowork.getLatitude());
        assertEquals(4.5678f, cowork.getLongitude());
        assertEquals(200.0, cowork.getPricePerDay());
        assertEquals(100, cowork.getCapacity());
        assertEquals(new HashSet<>(), cowork.getRatings());
    }
}
