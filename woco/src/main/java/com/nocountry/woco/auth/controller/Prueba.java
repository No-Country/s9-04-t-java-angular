package com.nocountry.woco.auth.controller;

import com.nocountry.woco.auth.model.request.UserRequest;
import com.nocountry.woco.auth.model.response.UserResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "*")
public class Prueba {
    @GetMapping ("/register")
    public ResponseEntity<String> signup() throws IOException {
        return ResponseEntity.status(HttpStatus.CREATED).body("Ok");

    }
}
