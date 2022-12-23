package com.mc.todoapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.mc.todoapp.models.TodoItem;
import com.mc.todoapp.repositories.TodoItemsRepository;

@Service
public class TodoItemsService {
    
    @Autowired
    private TodoItemsRepository todoItemsRepository;

    public List<TodoItem> getAll() {
        //TODO - sorting column and direction as parameters
        return todoItemsRepository.findAll(Sort.by(Sort.Direction.ASC, "createdAt"));
    }

    public TodoItem save(TodoItem item) {
       return todoItemsRepository.save(item);   
    }

    public void delete(String itemId) {
        todoItemsRepository.deleteById(itemId);   
     }
}
