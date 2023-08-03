package com.mc.todoapp.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mc.todoapp.models.TodoItem;
import com.mc.todoapp.services.TodoItemsService;

@RestController
public class TodoItemsController {

    Logger logger = LoggerFactory.getLogger(TodoItemsController.class);

    @Autowired
    private TodoItemsService todoItemsService;

    @GetMapping("/todos")
    public List<TodoItem> getAll() {
        return todoItemsService.getAll();
    }

    @PostMapping("/todos")
    public ResponseEntity<TodoItem> create(@RequestBody TodoItem item) {
        logger.debug("adding new item " + item);
        var newItem = todoItemsService.save(item);
        return new ResponseEntity<>(newItem, HttpStatus.CREATED);
    }

    @CrossOrigin
    @PutMapping("/todos")
    public ResponseEntity<TodoItem> update(@RequestBody TodoItem item) {
        logger.debug("updating item " + item);
        var newItem = todoItemsService.save(item);
        return new ResponseEntity<>(newItem, HttpStatus.CREATED);
    }

    @CrossOrigin
    @DeleteMapping("/todos/{itemId}")
    public ResponseEntity<String> delete(@PathVariable("itemId") String itemId) {
        logger.info("deleting item " + itemId);
        todoItemsService.delete(itemId);
        return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
    }
}
