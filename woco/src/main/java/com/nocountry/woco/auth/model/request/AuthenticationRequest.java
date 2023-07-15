package com.nocountry.woco.auth.model.request;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class AuthenticationRequest {
    @Email(message = "Username must be email")
    private String email;
    private String username=email;
    @Size(min = 8)
    private String password;
}

