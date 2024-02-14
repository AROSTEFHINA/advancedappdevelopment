package com.elderly.elderly;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Evento",
				version = "1.1.2",
				description = "Plan your event",
				contact = @Contact(
						name = "Aro Stefhina",
						email = "arostefhina26@gmail.com"
						)
				)
		)
public class ElderlyApplication {

	public static void main(String[] args) {
		SpringApplication.run(ElderlyApplication.class, args);
	}

}
