package com.codeclan.timelines.controllers;

import com.codeclan.timelines.models.Event;
import com.codeclan.timelines.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class EventController {
    @Autowired
    EventRepository eventRepository;

    @GetMapping("/events")
    public ResponseEntity getAllEvents(
            @RequestParam(name="name", required = false) String name,
            @RequestParam(name="location", required = false) String location
    ){
        if (name!=null){
            return new ResponseEntity(eventRepository.findByName(name), HttpStatus.OK);
        }
        if (name != null) {
        return new ResponseEntity(eventRepository.findByLocationName(location), HttpStatus.OK);
        }
        return new ResponseEntity(eventRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/events/{id}")
    public ResponseEntity getEventById(@RequestParam(name="id") Long id){
        return new ResponseEntity(eventRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/events")
    public ResponseEntity createEvent(@RequestBody Event event){
        return new ResponseEntity(eventRepository.save(event), HttpStatus.CREATED);
    }

    @PatchMapping("/events/{id}")
    public ResponseEntity updateEvent(@RequestBody Event event){
        return new ResponseEntity(eventRepository.save(event), HttpStatus.OK);
    }

    @DeleteMapping("/events/{id}")
    public void deleteEvent(@PathVariable Long id){
        eventRepository.deleteById(id);
    }
}
