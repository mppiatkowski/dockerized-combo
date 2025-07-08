package com.example.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "notes")
public class Note {
    
  private @Id
  @GeneratedValue Long id;
  private String title;
  private String description;

  Note() {}

  Note(String title, String description) {
    this.title = title;
    this.description = description;
  }
}