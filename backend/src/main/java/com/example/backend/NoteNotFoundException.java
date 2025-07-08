package com.example.backend;

public class NoteNotFoundException  extends RuntimeException {
        NoteNotFoundException(Long id) {
        super("Could not find note " + id);
    }
}
