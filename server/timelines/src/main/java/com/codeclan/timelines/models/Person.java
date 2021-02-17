package com.codeclan.timelines.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "persons")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String nationality;
    @Column
    private Date birthDate;
    @Column
    private Date deathDate;
    @ManyToOne
    @JoinColumn(name="event_id")
    @JsonIgnoreProperties({"persons"})
    private List<Event> events;

    public Person(String name, String nationality, Date birthDate, Date deathDate) {
        this.name = name;
        this.nationality = nationality;
        this.birthDate = birthDate;
        this.deathDate = deathDate;
        this.events = new ArrayList<>();
    }

    public Person() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public Date getDeathDate() {
        return deathDate;
    }

    public void setDeathDate(Date deathDate) {
        this.deathDate = deathDate;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

}
