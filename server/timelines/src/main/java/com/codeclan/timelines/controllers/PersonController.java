package com.codeclan.timelines.controllers;

import com.codeclan.timelines.models.Event;
import com.codeclan.timelines.models.Person;
import com.codeclan.timelines.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PersonController {

    @Autowired
    PersonRepository personRepository;

    @GetMapping("/persons")
    public ResponseEntity<List<Person>> getAllPersons(
            @RequestParam(name="person_name", required = false) String personName,
            @RequestParam(name="location_name", required = false) String locationName
    ){
        if(personName != null){
            return new ResponseEntity<>(personRepository.findByName(personName), HttpStatus.OK);
        }
        if(locationName != null){
            return new ResponseEntity<>(personRepository.findByEventsLocationName(locationName), HttpStatus.OK);
        }
        return new ResponseEntity<>(personRepository.findAll(), HttpStatus.OK);
    }


    @GetMapping("/persons/{id}")
    public ResponseEntity<Optional<Person>> getPersonById(@PathVariable Long id){
        return new ResponseEntity<>(personRepository.findById(id), HttpStatus.OK);
    }


    @PostMapping("/persons")
    public ResponseEntity<Person> createPerson(@RequestBody Person person){ personRepository.save(person);
        return new ResponseEntity<>(person, HttpStatus.CREATED);
    }

    @PatchMapping("/persons/{id}")
    public ResponseEntity updatePersons(@RequestBody Person person){
        return new ResponseEntity(personRepository.save(person), HttpStatus.OK);
    }

    @DeleteMapping("/persons/{id}")
    public void deletePerson(@PathVariable Long id){
        personRepository.deleteById(id);
    }

}
