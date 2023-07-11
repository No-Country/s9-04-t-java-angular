package com.nocountry.woco.modelTest;

import com.nocountry.woco.model.entity.Location;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class LocationTest {

    @Mock
    private Location locationMock;

    @Test
    public void testLocationCreation() {
        // Create a test location
        Location location = Location.builder()
                .id(1)
                .city("Test City")
                .province("Test Province")
                .country("Test Country")
                .build();

        // Verify the attributes
        assertEquals(1, location.getId());
        assertEquals("Test City", location.getCity());
        assertEquals("Test Province", location.getProvince());
        assertEquals("Test Country", location.getCountry());
    }

    @Test
    public void testLocationGettersAndSetters() {
        // Set mock values
        when(locationMock.getId()).thenReturn(2);
        when(locationMock.getCity()).thenReturn("Mock City");
        when(locationMock.getProvince()).thenReturn("Mock Province");
        when(locationMock.getCountry()).thenReturn("Mock Country");

        // Verify the getters
        assertEquals(2, locationMock.getId());
        assertEquals("Mock City", locationMock.getCity());
        assertEquals("Mock Province", locationMock.getProvince());
        assertEquals("Mock Country", locationMock.getCountry());

        // Set new values
        locationMock.setId(3);
        locationMock.setCity("New City");
        locationMock.setProvince("New Province");
        locationMock.setCountry("New Country");

        // Verify the setters
        assertEquals(3, locationMock.getId());
        assertEquals("New City", locationMock.getCity());
        assertEquals("New Province", locationMock.getProvince());
        assertEquals("New Country", locationMock.getCountry());
    }
}
