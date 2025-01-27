package com.jobportal.Repositories;

import com.jobportal.Entities.OTP;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface OTPRepository extends MongoRepository<OTP, String> {
    List<OTP> findByCreationTimeBefore(LocalDateTime expiry);
}
