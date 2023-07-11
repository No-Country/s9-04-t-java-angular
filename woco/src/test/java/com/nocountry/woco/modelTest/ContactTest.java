package com.nocountry.woco.modelTest;


import com.nocountry.woco.model.entity.Contact;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ContactTest {

    @Test
    public void testContactGettersAndSetters() {
        // Create a test contact
        Contact contact = Contact.builder()
                .id(1L)
                .email("test@example.com")
                .whatsapp("123456789")
                .instagram("test_user")
                .phone("987654321")
                .website("www.example.com")
                .build();

        // Verify the getters
        assertEquals(1L, contact.getId());
        assertEquals("test@example.com", contact.getEmail());
        assertEquals("123456789", contact.getWhatsapp());
        assertEquals("test_user", contact.getInstagram());
        assertEquals("987654321", contact.getPhone());
        assertEquals("www.example.com", contact.getWebsite());

        // Set new values
        contact.setId(2L);
        contact.setEmail("new_test@example.com");
        contact.setWhatsapp("987654321");
        contact.setInstagram("new_test_user");
        contact.setPhone("123456789");
        contact.setWebsite("www.newexample.com");

        // Verify the setters
        assertEquals(2L, contact.getId());
        assertEquals("new_test@example.com", contact.getEmail());
        assertEquals("987654321", contact.getWhatsapp());
        assertEquals("new_test_user", contact.getInstagram());
        assertEquals("123456789", contact.getPhone());
        assertEquals("www.newexample.com", contact.getWebsite());
    }
}
