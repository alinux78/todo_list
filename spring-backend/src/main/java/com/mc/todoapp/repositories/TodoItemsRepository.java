package com.mc.todoapp.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mc.todoapp.models.TodoItem;

@Repository
public interface TodoItemsRepository extends JpaRepository<TodoItem, String> {
}
