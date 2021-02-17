package com.codeclan.timelines.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
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
    @JsonIgnoreProperties({"events"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name="persons_events",
            joinColumns = {@JoinColumn(
                    name = "event_id",
                    nullable = false,
                    updatable = false
            )},
            inverseJoinColumns = {@JoinColumn(
                    name = "person_id",
                    nullable = false,
                    updatable = false
            )}
    )
    private List<Person> persons;

    public Event(String name, String date, Location location, String description) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.description = description;
        this.persons = new ArrayList<>();
    }

    public Event() {
    }

    public void addPerson(Person person){
        this.persons.add(person);
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

    public List<Person> getPersons() {
        return persons;
    }

    public void setPersons(List<Person> persons) {
        this.persons = persons;
    }
}
