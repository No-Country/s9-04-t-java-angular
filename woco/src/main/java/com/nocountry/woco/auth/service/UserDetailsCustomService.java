package com.nocountry.woco.auth.service;


import com.nocountry.woco.auth.jwt.JwtUtils;
import com.nocountry.woco.auth.model.entity.UserEntity;
import com.nocountry.woco.auth.model.repository.RoleRepository;
import com.nocountry.woco.auth.model.repository.UserRepository;
import com.nocountry.woco.auth.model.request.AuthenticationRequest;
import com.nocountry.woco.auth.model.request.UserRequest;
import com.nocountry.woco.auth.model.response.AuthenticationResponse;
import com.nocountry.woco.auth.model.response.UserResponse;
import com.nocountry.woco.auth.security.RoleType;
import com.nocountry.woco.model.mapper.GenericMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserDetailsCustomService implements UserDetailsService {

    private final UserRepository userRepository;
    private final GenericMapper mapper;
    private final RoleRepository roleRepository;
    private final JwtUtils jwtUtil;
    @Lazy
    private final AuthenticationManager authenticationManager;


    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByUsername(userName);
        if (userEntity == null) {
            throw new UsernameNotFoundException("Username or password not found");
        }
        return new User(userEntity.getUsername(), userEntity.getPassword(), userEntity.getAuthorities());
    }

    public UserResponse save(UserRequest userRequest) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        UserEntity userEntity = new UserEntity();
        userEntity.setFirstName(userRequest.getFirstName());
        userEntity.setLastName(userRequest.getLastName());
        userEntity.setEmail(userRequest.getEmail());
        userEntity.setUsername(userRequest.getEmail());
        userEntity.setRoles(List.of(roleRepository.findByName(RoleType.ADMIN.getFullRoleName())));
        userEntity.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        UserResponse result = mapper.map(userEntity,UserResponse.class);
        userRepository.save(userEntity);
        result.setToken(jwtUtil.generateToken(userEntity));

        //MAIL VALIDATION WHEN AN USER IS CREATED
        /*
        if (userEntity != null) {
            emailService.sendEmailTo(userEntity.getEmail(), "welcome");
        }*/
        return result;

    }


    public AuthenticationResponse login(AuthenticationRequest authenticationRequest)
            {
        UserEntity user = userRepository.findByEmail(authenticationRequest.getUsername()).get();
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()));

        return new AuthenticationResponse(user.getUsername(), jwtUtil.generateToken(user));
    }

}
