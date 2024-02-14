
// package com.elderly.elderly.repository;

// import org.springframework.data.jpa.repository.JpaRepository;

// import com.elderly.elderly.entity.Serviceentity;

// public interface ServiceRepo extends JpaRepository<Serviceentity, Long> {

// }

package com.elderly.elderly.repository;

import com.elderly.elderly.entity.EventEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepo extends JpaRepository<EventEntity, Long> {
    EventEntity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}