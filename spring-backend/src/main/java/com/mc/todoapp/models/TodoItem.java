package com.mc.todoapp.models;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
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
  @GeneratedValue(generator = "system-uuid")
  @GenericGenerator(name = "system-uuid", strategy = "uuid")
  private String id;
  @ManyToOne
  private TodoUser user;
  private boolean done;
  private String summary;
  private Long dueDate;
  private long createdAt;
}
