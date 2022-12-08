package com.mc.todoapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mc.todoapp.models.TodoItem;

@Repository
public interface TodoItemsRepository extends JpaRepository<TodoItem, Long> {
    List<TodoItem> findAll();
}
