package com.mc.todoapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mc.todoapp.models.TodoItem;
import com.mc.todoapp.services.TodoItemsService;

@CrossOrigin(origins = { "http://localhost:5050"})
@RestController
public class TodoItemsController {

    @Autowired
    private TodoItemsService todoItemsService;

    @GetMapping("/todos")
    public List<TodoItem> getAll() {
        return todoItemsService.getAll();
    }
}