package com.nocountry.woco.model.mapper;

import com.nocountry.woco.dto.ContactDto;
import com.nocountry.woco.model.entity.Contact;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ContactMapper {
    ContactMapper INSTANCE = Mappers.getMapper( ContactMapper.class );

    ContactDto toContactDTO(Contact contact);
    Contact toContact(ContactDto DTO);
    List<ContactDto> toContactsDTO(List<Contact> contact);
    List<Contact> toContacts(List<ContactDto> contactDTO);

}

