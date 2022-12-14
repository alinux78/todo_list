package com.mc.todoapp;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.mc.todoapp.models.TodoItem;
import com.mc.todoapp.repositories.TodoItemsRepository;


@SpringBootApplication
public class TodoListApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoListApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedOrigins("http://localhost:5050");
			}
		};
	}

	// TODO remove init data
	@Bean
	ApplicationRunner init(TodoItemsRepository repository) {
		return args -> {
			if (repository.count() == 0) {
				addDemoData(repository);
			}
		};
	}

	private void addDemoData(TodoItemsRepository repository) {
		long now = System.currentTimeMillis();
		int i = 0;
		var items =List.of(
            new TodoItem(null, true, "Write letter to Santa",  new GregorianCalendar(2012, Calendar.NOVEMBER, 28).getTimeInMillis(), now + (i++) * 1000),
            new TodoItem(null, false, "Buy presents (just in case)",  new GregorianCalendar(2022, Calendar.DECEMBER, 23).getTimeInMillis(), now + (i++) * 1000),
            new TodoItem(null, false, "Renew car insurance",  new GregorianCalendar(2023, Calendar.JANUARY, 15).getTimeInMillis(), now + (i++) * 1000),
            new TodoItem(null, false, "Read Harry Potter",  null, now + (i++) * 1000),
            new TodoItem(null, false, "Order coffee",  null, now + (i++) * 1000)
        );
		for (TodoItem item : items) {
			repository.save(item);
		}
	}
}
