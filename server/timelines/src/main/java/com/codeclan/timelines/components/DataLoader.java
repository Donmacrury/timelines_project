package com.codeclan.timelines.components;

import com.codeclan.timelines.models.Person;
import com.codeclan.timelines.repositories.EventRepository;
import com.codeclan.timelines.repositories.LocationRepository;
import com.codeclan.timelines.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    LocationRepository locationRepository;
    @Autowired
    EventRepository eventRepository;
    @Autowired
    PersonRepository personRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

    }
}
