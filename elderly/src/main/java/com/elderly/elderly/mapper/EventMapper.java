package com.elderly.elderly.mapper;

import com.elderly.elderly.dto.EventDto;
import com.elderly.elderly.entity.EventEntity;

public class EventMapper {

    public static EventDto mapToDto(EventEntity eventEntity) {
        if (eventEntity == null) return null;
        return new EventDto(
            eventEntity.getImage(),
            eventEntity.getName(),
            eventEntity.getDescription()
        );
    }

    public static EventEntity mapToEntity(EventDto eventDto) {
        if (eventDto == null) return null;
        return new EventEntity(
            null,
            eventDto.getImage(),
            eventDto.getName(),
            eventDto.getDescription()
        );
    }
}
