package com.jobportal.Repositories;

import com.jobportal.Entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, Long> {
    public Optional<User> findByEmail(String email);
}
