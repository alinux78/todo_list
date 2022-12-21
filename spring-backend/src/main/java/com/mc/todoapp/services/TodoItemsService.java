package com.mc.todoapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mc.todoapp.models.TodoItem;
import com.mc.todoapp.repositories.TodoItemsRepository;

@Service
public class TodoItemsService {
    @Autowired
    private TodoItemsRepository todoItemsRepository;

    public List<TodoItem> getAll() {
        return todoItemsRepository.findAll();
    }
}
