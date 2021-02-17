package com.codeclan.timelines.repositories;

import com.codeclan.timelines.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

    List<Location> findByName (String locationName);
    List<Location> findByLatitudeAndLongitude (Double latitude, Double longitude);
//    List<Location> findByDescription (String description); not sure how easy that one
//    will be for a client to get right
    List<Location> findByEventsName (String eventName);
    List<Location> findByEventsDate(String date);
//    List<Location> findByEventsNameAndEventsPersonsName(String eventName, String name);
    List<Location> findByNameAndEventsDate(String name, String date);

}
