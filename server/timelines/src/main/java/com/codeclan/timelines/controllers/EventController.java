package com.codeclan.timelines.controllers;

import com.codeclan.timelines.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventController {
    @Autowired
    EventRepository eventRepository;

    @GetMapping("/events")
    public ResponseEntity getAllEvents(
            @RequestParam(name="name", required = false) String name
    ){
        if (name!=null){
            return new ResponseEntity(eventRepository.findByName(name), HttpStatus.OK);
        }
        return new ResponseEntity(eventRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/events/{id}")
    public ResponseEntity getEventById(@RequestParam(name="id") Long id){
        return new ResponseEntity(eventRepository.findById(id), HttpStatus.OK);
    }
}
