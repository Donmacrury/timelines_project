package com.codeclan.timelines.repositories;

import com.codeclan.timelines.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByName(String name);
    List<Event> findByLocationName(String name);
    List<Event> findByPersonsId(Long personId);
    List<Event> findByPersonsName(String personName);
    List<Event> findByLocationNameAndDate(String locationName, String date);
}
