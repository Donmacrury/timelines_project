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

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

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
	void setUp() {
		Location cullodenMoor = new Location(57.476066, -4.099487, "Culloden Moor", "A hilly moorland covered in gorse-bush and wetland");
		locationRepository.save(cullodenMoor);
		Event cullodenBattle = new Event("Battle of Culloden", "1746-04-15", cullodenMoor, "A bloody battle that lasted less than an hour, in which the British government forces prevailed");
		eventRepository.save(cullodenBattle);
		Person charlesStuart = new Person("Charles Edward Stuart", "Italian", "1720-12-31", "1788-01-31");
		personRepository.save(charlesStuart);
	}

	@Test
	void canGetEventByEventName() {
		List<Event> eventByName = eventRepository.findByName("Battle of Culloden");
		assertEquals(1, eventByName.size());
	}

	@Test
	void canGetEventByLocationName(){
		List<Event> eventByLocationName = eventRepository.findByLocationName("Culloden Moor");
		assertEquals(1, eventByLocationName.size());
		assertEquals("Battle of Culloden", eventByLocationName.get(0).getName());
	}

	@Test
	public void canGetEventByPersonId(){
		List<Event> personsEvent = eventRepository.findByPersonsId((long) 2);
		assertEquals("Battle of Culloden", personsEvent.get(0).getName());
	}

//	@Test
//	void canGetPersonByEventName() {
//		List<Event> eventsWithPerson = eventRepository.findByPersonsName("Charles Edward Stuart");
//		assertEquals("Charles Edwards Stuart", eventsWithPerson.get(0).getPeopleAt());
//	}
//
//
//	@Test
//	void canGetLocationWithEvent() {
//		List<Event> eventLocation = eventRepository.findByLocationName("Culloden Moor");
//		assertEquals("Culloden Moor", eventLocation.get(0).getLocation().getName());
//	}
}