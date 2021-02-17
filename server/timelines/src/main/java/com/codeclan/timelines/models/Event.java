package com.codeclan.timelines.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String date;
    @ManyToOne
    @JoinColumn(name="location_id")
    @JsonIgnoreProperties({"events"})
    private Location location;
    @Column
    private String description;
    @ManyToMany
    @JoinColumn(name="person_id")
    @JsonIgnoreProperties({"event"})
    private List<Person> peopleAt;

    public Event(String name, String date, Location location, String description) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.description = description;
        this.peopleAt = new ArrayList<>();
    }

    public Event() {
    }

    public void addPerson(Person person){
        this.peopleAt.add(person);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Person> getPeopleAt() {
        return peopleAt;
    }

    public void setPeopleAt(List<Person> peopleAt) {
        this.peopleAt = peopleAt;
    }
}
