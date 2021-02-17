package com.codeclan.timelines.controllers;

import com.codeclan.timelines.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LocationController {
    @Autowired
    LocationRepository locationRepository;

//    @GetMapping("/locations")
//    public ResponseEntity getLocations(
//            @RequestParam(name="name", required = false) String name,
//            @RequestParam(name="latitude", required = false) Double latitude,
//            @RequestParam(name="longitude", required = false) Double longitude,
//            @RequestParam(name="eventName", required = false) String eventName,
//            @RequestParam(name="eventDate", required = false) String eventDate,
//            @RequestParam(name="personName", required = false) String personName
//    ){
//        if(name!=null, )
//    }
}
