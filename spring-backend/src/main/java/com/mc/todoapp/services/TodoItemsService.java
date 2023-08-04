package com.mc.todoapp.services;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.mc.todoapp.models.TodoItem;
import com.mc.todoapp.models.TodoUser;
import com.mc.todoapp.repositories.TodoItemsRepository;

@Service
public class TodoItemsService {
    Logger logger = LoggerFactory.getLogger(TodoItemsService.class);
    @Autowired
    private TodoItemsRepository todoItemsRepository;

    public List<TodoItem> getAllByUser(TodoUser user) {
        //TODO - sorting column and direction as parameters
        return todoItemsRepository.findAllByUser(user, Sort.by(Sort.Direction.ASC, "createdAt"));
    }

    public TodoItem save(TodoItem item) {
       return todoItemsRepository.save(item);   
    }

    public void delete(String itemId) {
        todoItemsRepository.deleteById(itemId);   
     }
}
