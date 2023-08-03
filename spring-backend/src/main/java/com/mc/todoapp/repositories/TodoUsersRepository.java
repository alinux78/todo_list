package com.mc.todoapp.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mc.todoapp.models.TodoUser;

@Repository
public interface TodoUsersRepository extends JpaRepository<TodoUser, String> {
    TodoUser findByExternalId(String externalId);
}
