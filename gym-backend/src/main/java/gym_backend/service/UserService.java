package gym_backend.service;

import gym_backend.security.JwtService;
import gym_backend.dto.LoginRequest;
import gym_backend.dto.LoginResponse;
import gym_backend.dto.RegisterRequest;
import gym_backend.model.Role;
import gym_backend.model.User;
import gym_backend.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public UserService(UserRepository userRepository,
                       BCryptPasswordEncoder passwordEncoder,
                       JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    // LOGIN (ADMIN ONLY)
    public LoginResponse loginUser(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        if (user.getRole() != Role.ADMIN) {
            throw new RuntimeException("Access denied: Admin only");
        }

        String token = jwtService.generateToken(user.getEmail(), user.getRole().name());

        return new LoginResponse(
                "Login successful",
                token,
                user.getRole().name()
        );
    }

    // REGISTER
    public User registerUser(RegisterRequest request) {

        User user = new User();
        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.MEMBER);

        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}