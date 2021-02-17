package com.codeclan.timelines.components;

import com.codeclan.timelines.models.Event;
import com.codeclan.timelines.models.Location;
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
        Location cullodenMoor = new Location(57.476066, -4.099487, "Culloden Moor", "A hilly moorland covered in gorse-bush and wetland");
        locationRepository.save(cullodenMoor);
        Location prestonPans = new Location(55.96124, -2.98425, "Presontpans", "A small fishing town east of Edinburgh");
        locationRepository.save(prestonPans);
        Location falkirkMuir = new Location(55.98999, -3.81630, "Falkirk Muir", "site of the battle of Flakirk Muir");
        locationRepository.save(falkirkMuir);
        Location glenfinnan = new Location(56.869729, -5.436876, "Glenfinnan", "site of Bonny Prince Charlies landing on mainland Scotland");
        locationRepository.save(glenfinnan);
        Location derby = new Location (52.922560, -1.475179, "Derby", "A small town north of London");
        locationRepository.save(derby);

        Event event = new Event("Battle of Culloden", "1746-04-15", cullodenMoor, "A bloody battle that lasted less than an hour, in which the British government forces prevailed");
        event.addPerson(cumberland);
        event.addPerson(wolfe);
        event.addPerson(murray);
        event.addPerson(charlyBoi);
        eventRepository.save(event);
        Event battlePrestonpans = new Event("Battle of Prestonpans", "1745-09-21", prestonPans, "The first significant victory for the Jacobite forces in the 1745 rising");
        battlePrestonpans.addPerson(charlyBoi);
        battlePrestonpans.addPerson(murray);
        eventRepository.save(battlePrestonpans);
        Event battleFalkirkMuir = new Event("Battle of Falkirk muir", "1746-01-17", falkirkMuir, "A tactical Victory of the Jacobite army in their retreat northward into the highlands");
        battleFalkirkMuir.addPerson(wolfe);
        battleFalkirkMuir.addPerson(charlyBoi);
        battleFalkirkMuir.addPerson(murray);
        eventRepository.save(battleFalkirkMuir);
        Event councilAtDerby = new Event("Council at Derby", "1745-12-04", derby, "A Council of the Jacobite highcomand met and decided to retreat to Scotland");
        councilAtDerby.addPerson(charlyBoi);
        councilAtDerby.addPerson(murray);
        eventRepository.save(councilAtDerby);


        Person charlyBoi = new Person("Charles Edward Stuart", "Italian", "1720-12-31", "1788-01-31");
        charlyBoi.addEvents(councilAtDerby);
        charlyBoi.addEvents(battlePrestonpans);
        charlyBoi.addEvents(battleFalkirkMuir);
        charlyBoi.addEvents(event);
        personRepository.save(charlyBoi);
        Person cumberland = new Person("Butcher Cumberland", "English", "1721-04-15", "1765-10-31");
        cumberland.addEvents(event);
        personRepository.save(cumberland);
        Person murray = new Person ("Lord George Murray", "Scottish", "1694-10-04", "1760-10-11");
        murray.addEvents(councilAtDerby);
        murray.addEvents(event);
        murray.addEvents(battlePrestonpans);
        murray.addEvents(battleFalkirkMuir);
        personRepository.save(murray);
        Person wolfe = new Person ("James Wolfe", "English", "1727-01-02", "1759-09-13");
        wolfe.addEvents(event);
        wolfe.addEvents(battleFalkirkMuir);
        personRepository.save(wolfe);
    }
}
