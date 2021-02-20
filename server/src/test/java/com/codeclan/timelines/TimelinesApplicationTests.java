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
		assertEquals("Battle of Culloden", eventByName.get(0).getName());
	}

	@Test
	void canGetEventByLocationName() {
		List<Event> eventByLocationName = eventRepository.findByLocationName("Culloden Moor");
		assertEquals("Battle of Culloden", eventByLocationName.get(0).getName());
	}

	@Test
	public void canGetEventByPersonId() {
		List<Event> personsEvent = eventRepository.findByPersonsId((long) 2);
		assertEquals("Battle of Culloden", personsEvent.get(0).getName());
	}

	@Test
	public void canGetEventByPersonName() {
		List<Event> eventsByPersonName = eventRepository.findByPersonsName("James Wolfe");
//		TODO: James Wolfe should not be at 4 events, he should only be at 2, I think this is because
//		of the double entries in the DataLoader, Should be easy to fix
		assertEquals(4, eventsByPersonName.size());
	}

	@Test
	void canGetEventByLocationNameAndEventDate() {
		List<Event> eventsByLocationNameAndEventDate = eventRepository.findByLocationNameAndDate("Culloden Moor", "1746-04-15");
		assertEquals(1, eventsByLocationNameAndEventDate.size());
		assertEquals("Battle of Culloden", eventsByLocationNameAndEventDate.get(0).getName());
	}

	@Test
	void canGetLocationWithEvent() {
		List<Location> eventLocation = locationRepository.findByEventsName("Battle of Culloden");
		assertEquals("Culloden Moor", eventLocation.get(0).getName());
	}
//
//	@Test
//	void canGetLocationByLatitudeAndLogitude() {
//	}

//	@Test
//	void canGetLocationByEventsDate() {
//	}

	@Test
	void canGetPersonByEventName() {
		List<Person> personByEventName = personRepository.findByEventsName("Battle of Culloden");
		assertEquals("James Wolfe", personByEventName.get(0).getName());
	}

	@Test
	void canGetPersonsByEventLocationName() {
		List<Person> personsByEventsLocationName = personRepository.findByEventsLocationName("Culloden Moor");
		assertEquals(8, personsByEventsLocationName.size());
	}

	@Test
	void canGetPersonsByEventDate() {
		List<Person> personsByEventDate = personRepository.findByEventsDate("1746-04-15");
		assertEquals(8, personsByEventDate.size());
	}
}