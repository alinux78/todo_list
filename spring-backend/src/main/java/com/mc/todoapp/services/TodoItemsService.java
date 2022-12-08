package com.mc.todoapp.services;

import java.sql.Date;
import java.util.Calendar;
import java.util.GregorianCalendar;
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
        return List.of(
            new TodoItem("1", true, "Write letter to Santa",  new GregorianCalendar(2012, Calendar.NOVEMBER, 28).getTimeInMillis(), System.currentTimeMillis()),
            new TodoItem("2", false, "Buy presents (just in case)",  new GregorianCalendar(2022, Calendar.DECEMBER, 23).getTimeInMillis(), System.currentTimeMillis()),
            new TodoItem("3", false, "Renew car insurance",  new GregorianCalendar(2023, Calendar.JANUARY, 15).getTimeInMillis(), System.currentTimeMillis()),
            new TodoItem("4", false, "Read Harry Potter",  null, System.currentTimeMillis())
        );
        // TODO fetch items from repo
        //return todoItemsRepository.findAll();
    }
}
