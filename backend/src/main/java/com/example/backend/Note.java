package com.example.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "notes")
public class Note {
    
  private @Id
  @GeneratedValue Long id;

  @NotBlank(message = "Title is mandatory")
  @Size(max = 100, message = "Title must be at most 100 characters")
  private String title;

  @Size(max = 800, message = "Description must be at most 800 characters")
  private String description;

  Note() {}

  Note(String title, String description) {
    this.title = title;
    this.description = description;
  }
}