package com.elderly.elderly.controller;

import com.elderly.elderly.dto.Bookingdto;
import com.elderly.elderly.dto.EventDto;
import com.elderly.elderly.service.Bookingservice;
import com.elderly.elderly.service.EventService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/events")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    

    @GetMapping("/{name}")
    public ResponseEntity<EventDto> getEventByName(@PathVariable String name) {
        EventDto eventDto = eventService.getEventByName(name);
        if (eventDto != null) {
            return new ResponseEntity<>(eventDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<EventDto> createEvent(@RequestBody EventDto eventDto) {
        EventDto createdEvent = eventService.createEvent(eventDto);
        return new ResponseEntity<>(createdEvent, HttpStatus.CREATED);
    }

    @PutMapping("/{name}")
    public ResponseEntity<EventDto> updateEventByName(@PathVariable String name, @RequestBody EventDto updatedEventDto) {
        EventDto updatedEvent = eventService.updateEventByName(name, updatedEventDto);
        if (updatedEvent != null) {
            return new ResponseEntity<>(updatedEvent, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteEventByName(@PathVariable String name) {
        eventService.deleteEventByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
