package com.example.backend;

import org.springframework.data.jpa.repository.JpaRepository;

interface NotesRepository extends JpaRepository<Note, Long> {
    
}
