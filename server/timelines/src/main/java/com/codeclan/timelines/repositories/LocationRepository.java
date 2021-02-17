package com.codeclan.timelines.repositories;

import com.codeclan.timelines.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

    List<Location> findByName (String locationName);
    List<Location> findByLatitudeAndLongitude (Double latitude, Double longitude);
    List<Location> findByDescription (String description);
    List<Location> findByEventName (String eventName);
    List<Location> findByEventDate(String date);
    List<Location> findByEventNameAndPersonName(String eventName, String name);
    List<Location> findByNameAndEventDate(String name, String date);

}
