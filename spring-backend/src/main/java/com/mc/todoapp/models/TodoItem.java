package com.mc.todoapp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "todo_item")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoItem {
  @Id
  @GeneratedValue(strategy =  GenerationType.AUTO)  
  private String id;
  private boolean done;
  private String summary;
  private Long dueDate;
  private long createdAt;
}
  