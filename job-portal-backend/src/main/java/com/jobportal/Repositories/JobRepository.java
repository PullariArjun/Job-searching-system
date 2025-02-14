package com.jobportal.Repositories;

import com.jobportal.Entities.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends MongoRepository<Job, Long> {
    List<Job> findByPostedBy(Long id);
}
