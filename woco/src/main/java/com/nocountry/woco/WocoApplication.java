package com.nocountry.woco;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.Month;
import java.util.Arrays;


@SpringBootApplication(scanBasePackages={
		"com.nocountry.woco.mapper", "com.nocountry.woco.model.repository,com.nocountry.woco.auth.security"})
public class WocoApplication {

	public static void main(String[] args) {
		SpringApplication.run(WocoApplication.class, args);
	}

	/*@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {
			System.out.println("Aplicación a iniciado ");
			//saveLocations();

		};
	}

	public void saveEstudiantes() {
		JpaRepository<Object, Object> LocationRepository;
		LocationRepository.saveAll(Arrays.asList(
				new Estudiante("Juan", "Romero", "juanmail@mail.com", 11231332, LocalDate.of(2001, Month.APRIL, 1)),
				new Estudiante("Jose", "Perez", "Josemail@mail.com", 31231333, LocalDate.of(1998, Month.APRIL, 1))
		));

	}*/


}
