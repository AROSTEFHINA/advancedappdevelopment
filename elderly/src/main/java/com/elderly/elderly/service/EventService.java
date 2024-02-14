package com.elderly.elderly.service;

import com.elderly.elderly.dto.EventDto;
import com.elderly.elderly.entity.EventEntity;
import com.elderly.elderly.mapper.EventMapper;
import com.elderly.elderly.repository.EventRepo;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    private final EventRepo eventRepo;

    public EventService(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    public EventDto getEventByName(String name) {
        EventEntity eventEntity = eventRepo.findByName(name);
        if (eventEntity != null) {
            return EventMapper.mapToDto(eventEntity);
        } else {
            return null;
        }
    }

    public EventDto createEvent(EventDto eventDto) {
        EventEntity eventEntity = EventMapper.mapToEntity(eventDto);
        eventEntity = eventRepo.save(eventEntity);
        return EventMapper.mapToDto(eventEntity);
    }

    public EventDto updateEventByName(String name, EventDto updatedEventDto) {
        EventEntity existingEvent = eventRepo.findByName(name);

        if (existingEvent != null) {
            existingEvent.setImage(updatedEventDto.getImage());
            existingEvent.setDescription(updatedEventDto.getDescription());
            existingEvent = eventRepo.save(existingEvent);
            return EventMapper.mapToDto(existingEvent);
        } else {
            return null;
        }
    }

    public void deleteEventByName(String name) {
        EventEntity eventEntity = eventRepo.findByName(name);
        if (eventEntity != null) {
            eventRepo.delete(eventEntity);
        }
    }
}
