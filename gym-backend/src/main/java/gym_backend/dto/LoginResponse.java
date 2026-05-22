package gym_backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {

    private String message;
    private String email;
    private Long userId;

    public LoginResponse(String message, String email, Long userId) {
        this.message = message;
        this.email = email;
        this.userId = userId;
    }
}