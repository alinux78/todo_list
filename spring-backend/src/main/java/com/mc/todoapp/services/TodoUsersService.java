package com.mc.todoapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import com.mc.todoapp.models.TodoUser;
import com.mc.todoapp.repositories.TodoUsersRepository;

@Service
public class TodoUsersService {
    @Autowired
    private TodoUsersRepository usersRepository;

    public TodoUser getCurrentUser() {
        Jwt jwt = ((Jwt)SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        String externalId = jwt.getSubject();

        TodoUser user = usersRepository.findByExternalId(externalId);
        if (user == null) {
            user = new TodoUser(null, externalId);
            user = usersRepository.save(user);
        }
        return user;
    }

}
