package com.nocountry.woco.auth.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin(origins = "*")
@RestController
public class Prueba {
    @GetMapping ("/register")
    public ResponseEntity<String> signup() throws IOException {
        return ResponseEntity.status(HttpStatus.CREATED).body("Ok");

    }
}
