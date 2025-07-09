package com.example.backend;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/notes")
public class NotesController {
    private final NotesRepository notesRepository;

    public NotesController(NotesRepository repository) {
        this.notesRepository = repository;
    }

    @PostMapping
    public Note addNote(@Valid @RequestBody Note note) {
        note.setTitle(SanitizationUtils.sanitize(note.getTitle()));
        note.setDescription(SanitizationUtils.sanitize(note.getDescription()));
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

    @PutMapping("/{id}")
    Note replaceEmployee(@Valid @RequestBody Note newNote, @PathVariable("id") Long id) {
        return notesRepository.findById(id)
        .map(note -> {
            note.setTitle(SanitizationUtils.sanitize(newNote.getTitle()));
            note.setDescription(SanitizationUtils.sanitize(newNote.getDescription()));
            return notesRepository.save(note);
        })
        .orElseGet(() -> notesRepository.save(newNote));
    }


    @DeleteMapping("/{id}")
    void deleteNote(@PathVariable("id") Long id) {
        notesRepository.deleteById(id);
    }
}
