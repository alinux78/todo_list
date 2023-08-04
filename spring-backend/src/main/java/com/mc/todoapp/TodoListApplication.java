package com.mc.todoapp;

import java.time.Year;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;

import com.mc.todoapp.models.TodoItem;
import com.mc.todoapp.repositories.TodoItemsRepository;



@SpringBootApplication
public class TodoListApplication {
	
	Logger logger = LoggerFactory.getLogger(TodoListApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(TodoListApplication.class, args);
	}


	@Bean
	ApplicationRunner init(TodoItemsRepository repository) {
		return args -> {
			logger.info("init code with deps injected");
		};
	}

	@EventListener(ApplicationReadyEvent.class)
	public void initData() {
		// TODO move init data here?
		logger.info("init event listener");
	}

}
