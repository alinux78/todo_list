package com.mc.todoapp.repositories;


import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mc.todoapp.models.TodoItem;
import com.mc.todoapp.models.TodoUser;

@Repository
public interface TodoItemsRepository extends JpaRepository<TodoItem, String> {
    List<TodoItem> findAllByUser(TodoUser user, Sort sort);
}
