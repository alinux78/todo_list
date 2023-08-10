package com.mc.todoapp.repositories;


import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.mc.todoapp.models.TodoItem;
import com.mc.todoapp.models.TodoUser;

@Repository
public interface TodoItemsPagingRepository extends PagingAndSortingRepository<TodoItem, String> {
    List<TodoItem> findAllByUser(TodoUser user, Pageable pageable);
}
