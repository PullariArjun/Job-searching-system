package com.jobportal.Services;

import com.jobportal.DTO.ProfileDTO;
import com.jobportal.Entities.Profile;
import com.jobportal.Exceptions.JobPortalException;
import com.jobportal.Repositories.ProfileRepository;
import com.jobportal.Utilities.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service("profileService")
public class ProfileServiceImpl implements ProfileService{

    @Autowired
    private ProfileRepository profileRepository;
    @Override
    public Long createProfile(String email) throws JobPortalException {
        Profile profile = new Profile();
        profile.setId(Utilities.getNextSequence("profiles"));
        profile.setEmail(email);
        profile.setSkills(new ArrayList<>());
        profile.setExperiences(new ArrayList<>());
        profile.setCertifications(new ArrayList<>());
        profileRepository.save(profile);
        return profile.getId();
    }

    @Override
    public ProfileDTO getProfile(Long id) throws JobPortalException {
        Profile profile = profileRepository.findById(id).orElseThrow(()-> new JobPortalException("PROFILE_NOT_FOUND"));
        return profile.toDTO();
    }

    @Override
    public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException {
        Profile profile = profileDTO.toEntity();
        profileRepository.save(profile);
        return profileDTO;

    }
}
