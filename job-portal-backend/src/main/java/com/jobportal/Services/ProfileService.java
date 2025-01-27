package com.jobportal.Services;

import com.jobportal.DTO.ProfileDTO;
import com.jobportal.Exceptions.JobPortalException;
import org.springframework.stereotype.Service;

@Service
public interface ProfileService {
    Long createProfile(String email) throws JobPortalException;

    ProfileDTO getProfile(Long id) throws JobPortalException;

    ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException;


}
