package com.codeclan.timelines;

import com.codeclan.timelines.models.Event;
import com.codeclan.timelines.models.Location;
import com.codeclan.timelines.models.Person;
import com.codeclan.timelines.repositories.EventRepository;
import com.codeclan.timelines.repositories.LocationRepository;
import com.codeclan.timelines.repositories.PersonRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TimelinesApplicationTests {

	@Autowired
	EventRepository eventRepository;
	@Autowired
	LocationRepository locationRepository;
	@Autowired
	PersonRepository personRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void canCreateAndSaveModels() {
		Location cullodenMoor = new Location(57.476066, -4.099487, "Culloden Moor", "A hilly moorland covered in gorse-bush and wetland");
		locationRepository.save(cullodenMoor);
		Event event = new Event("Battle of Culloden", "1746-04-15", cullodenMoor, "A bloody battle that lasted less than an hour, in which the British government forces prevailed");
		eventRepository.save(event);
		Person person = new Person("Charles Edward Stuart", "Italian", "1720-12-31", "1788-01-31");
		personRepository.save(person);
	}
}
