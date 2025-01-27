package com.jobportal.DTO;

import com.jobportal.Entities.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.validation.annotation.Validated;

@Data
@AllArgsConstructor
@Validated
@NoArgsConstructor
public class UserDTO {
    private Long id;
    @NotBlank(message = "{user.name.absent}")
    private String name;

    @Email(message = "{user.email.invalid}")
    @NotBlank(message = "{user.email.absent}")
    private String email;
    @NotBlank(message = "{user.password.absent}")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$", message = "{user.password.invalid}")
    private String password;

    @NotNull(message = "{user.account-type.absent}")
    private AccountType accountType;

    private Long profileId;

    public User toEntity(){
        return new User(this.id, this.name, this.email, this.password, this.accountType, this.profileId);
    }

}
