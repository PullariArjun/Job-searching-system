package com.jobportal.Services;

import com.jobportal.DTO.LoginDTO;
import com.jobportal.DTO.ResponseDTO;
import com.jobportal.DTO.UserDTO;
import com.jobportal.Entities.OTP;
import com.jobportal.Entities.User;
import com.jobportal.Exceptions.JobPortalException;
import com.jobportal.Repositories.OTPRepository;
import com.jobportal.Repositories.UserRepository;
import com.jobportal.Utilities.Data;
import com.jobportal.Utilities.Utilities;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service(value = "userService")
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProfileService profileService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private OTPRepository otpRepository;
    @Autowired
    private JavaMailSender mailSender;
    @Override
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException {
        Optional<User> optional = userRepository.findByEmail(userDTO.getEmail());
        if(optional.isPresent())throw new JobPortalException("USER_FOUND");
        userDTO.setProfileId(profileService.createProfile(userDTO.getEmail()));
        userDTO.setId(Utilities.getNextSequence("users"));
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        User user = userDTO.toEntity();
        user = userRepository.save(user);
//        System.out.println(userDTO);
        return user.toDTO();
    }

    @Override
    public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException {
        User user = userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));
        if(!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword()))throw new JobPortalException("INVALID_CREDENTIALS");
        return user.toDTO();
    }

    @Override
    public Boolean sendOtp(String email) throws JobPortalException, MessagingException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
        mimeMessageHelper.setTo(email);
        mimeMessageHelper.setSubject("Your OTP code");
        String genotp = Utilities.generateOtp();
        OTP otp = new OTP(email, genotp, LocalDateTime.now());
        otpRepository.save(otp);
        mimeMessageHelper.setText(Data.getMessageBody(genotp, user.getName()), true);
        mailSender.send(mimeMessage);
        return true;
    }

    @Override
    public Boolean verifyOtp(String email, String otp) throws JobPortalException {
        OTP otpEntity = otpRepository.findById(email).orElseThrow(
                () -> new JobPortalException("OTP_NOT_FOUND")
        );
        if(!otpEntity.getOtpCode().equals(otp))throw new JobPortalException("OTP_INCORRECT");

        return true;
    }

    @Override
    public ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException {
        User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(
                ()->new JobPortalException("USER_NOT_FOUND")
        );
        user.setPassword(passwordEncoder.encode(loginDTO.getPassword()));
        userRepository.save(user);
        return new ResponseDTO("Password changed Successfully..");
    }

    @Scheduled(fixedRate = 60000)
    public void removeExpiredOTPs(){
        LocalDateTime expiry = LocalDateTime.now().minusMinutes(5);
        List<OTP> expiredOTPs = otpRepository.findByCreationTimeBefore(expiry);
        if(!expiredOTPs.isEmpty()) {
            otpRepository.deleteAll(expiredOTPs);
            System.out.println("Removed " + expiredOTPs.size()+" expired OTPs..");
        }
    }
}
