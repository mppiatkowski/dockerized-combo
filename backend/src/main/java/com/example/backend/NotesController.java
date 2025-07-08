package com.example.backend;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notes")
public class NotesController {
    private final NotesRepository notesRepository;

    public NotesController(NotesRepository repository) {
        this.notesRepository = repository;
    }

    @PostMapping
    public Note addNote(@RequestBody Note note) {
        return notesRepository.save(note);
    }

    @GetMapping
    public List<Note> all() {
        return notesRepository.findAll();
    }

    @GetMapping("/{id}")
    public Note one(@PathVariable("id") Long id) {
        return notesRepository
            .findById(id)
            .orElseThrow(() -> new NoteNotFoundException(id));
    }

    @DeleteMapping("/{id}")
    void deleteNote(@PathVariable("id") Long id) {
        notesRepository.deleteById(id);
    }
}