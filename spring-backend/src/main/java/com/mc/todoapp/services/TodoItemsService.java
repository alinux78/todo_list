package com.mc.todoapp.services;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.mc.todoapp.models.TodoItem;
import com.mc.todoapp.models.TodoUser;
import com.mc.todoapp.repositories.TodoItemsPagingRepository;
import com.mc.todoapp.repositories.TodoItemsRepository;

@Service
public class TodoItemsService {
    Logger logger = LoggerFactory.getLogger(TodoItemsService.class);
    @Autowired
    private TodoItemsRepository todoItemsRepository;

    @Autowired
    private TodoItemsPagingRepository todoItemsPagingRepository;

    public long getCountByUser(TodoUser user) {
        return todoItemsRepository.countByUser(user);
    }


    public List<TodoItem> getAllByUser(TodoUser user, Pageable pageable) {
        return todoItemsPagingRepository.findAllByUser(user, pageable);
    }

    public TodoItem save(TodoItem item) {
       return todoItemsRepository.save(item);   
    }

    public void delete(String itemId) {
        todoItemsRepository.deleteById(itemId);   
     }
}
