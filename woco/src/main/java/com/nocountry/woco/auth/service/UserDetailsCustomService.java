package com.nocountry.woco.auth.service;



import com.nocountry.woco.auth.model.entity.RoleEntity;
import com.nocountry.woco.auth.model.entity.UserEntity;
import com.nocountry.woco.auth.model.repository.RoleRepository;
import com.nocountry.woco.auth.model.repository.UserRepository;
import com.nocountry.woco.auth.model.request.UserRequest;
import com.nocountry.woco.auth.model.response.UserResponse;
import com.nocountry.woco.auth.security.JwtService;
import com.nocountry.woco.auth.security.RoleType;
import com.nocountry.woco.model.mapper.GenericMapper;
import com.nocountry.woco.service.impl.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserDetailsCustomService  {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final GenericMapper mapper;


    public UserResponse save(UserRequest userRequest) throws IOException {
        UserEntity userEntity = new UserEntity();
        userEntity.setFirstName(userRequest.getFirstName());
        userEntity.setLastName(userRequest.getLastName());
        userEntity.setEmail(userRequest.getEmail());
        userEntity.setUsername(userRequest.getEmail());
        RoleEntity role = new RoleEntity();
        role.setName("Admin");
        role.setDescription("Algo");
        List<RoleEntity> roles = new ArrayList<>();
        roles.add(role);
        userEntity.setRoles(roles);
        userEntity.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        userRepository.save(userEntity);
        UserResponse result = mapper.map(userEntity, UserResponse.class);
        result.setToken(jwtService.generateToken(userEntity));

        //MAIL VALIDATION WHEN AN USER IS CREATED
      /*  if (userEntity != null) {
            emailService.send(userEntity.getEmail());
        }*/
        return result;
    }

    //Pendiente por rescribir
   /* public AuthenticationResponse login(AuthenticationRequest authenticationRequest) {
        ;
    }*/


}
