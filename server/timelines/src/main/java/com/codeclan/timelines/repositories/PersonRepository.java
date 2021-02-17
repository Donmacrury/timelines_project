package com.codeclan.timelines.repositories;

import com.codeclan.timelines.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    List<Person> findByName(String name);
    List<Person> findByEventsLocationName(String name);
    List<Person> findByEventsLocationLatitude(double latitude);
    List<Person> findByEventsLocationLongitude(double longitude);

}
