package com.codeclan.timelines.controllers;

import com.codeclan.timelines.models.Location;
import com.codeclan.timelines.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class LocationController {
    @Autowired
    LocationRepository locationRepository;

    @GetMapping("/locations")
    public ResponseEntity getLocations(
            @RequestParam(name="name", required = false) String name,
            @RequestParam(name="latitude", required = false) Double latitude,
            @RequestParam(name="longitude", required = false) Double longitude,
            @RequestParam(name="eventName", required = false) String eventName,
            @RequestParam(name="eventDate", required = false) String eventDate
    ){
        if(name!=null && latitude==null && longitude==null && eventName==null && eventDate==null){
            return new ResponseEntity(locationRepository.findByName(name), HttpStatus.OK);
        }
        if(name==null && latitude!=null && longitude!=null && eventName==null && eventDate==null){
            return new ResponseEntity(locationRepository.findByLatitudeAndLongitude(latitude, longitude), HttpStatus.OK);
        }
        if(name==null && latitude==null && longitude==null && eventName!=null && eventDate==null){
            return new ResponseEntity(locationRepository.findByEventsName(eventName), HttpStatus.OK);
        }
        if(name==null && latitude==null && longitude==null && eventName==null && eventDate!= null){
            return new ResponseEntity(locationRepository.findByEventsDate(eventDate), HttpStatus.OK);
        }
        return new ResponseEntity(locationRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/locations/{id}")
    public ResponseEntity getLocationById(@PathVariable Long id){
        return new ResponseEntity(locationRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/locations")
    public ResponseEntity createLocation(@RequestBody Location location){
        return new ResponseEntity(locationRepository.save(location), HttpStatus.CREATED);
    }

    @PutMapping("/locations/{id}")
    public ResponseEntity updateLocation(@RequestBody Location location){
        return new ResponseEntity(locationRepository.save(location), HttpStatus.OK);
    }

    @DeleteMapping("/locations/{id}")
    public void deleteLocation(@PathVariable Long id){
        locationRepository.deleteById(id);
    }
}
