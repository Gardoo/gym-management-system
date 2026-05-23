package gym_backend.service;

import gym_backend.security.JwtService;
import gym_backend.dto.LoginRequest;
import gym_backend.dto.LoginResponse;
import gym_backend.dto.RegisterRequest;
import gym_backend.model.User;
import gym_backend.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository,
                       BCryptPasswordEncoder passwordEncoder,
                       JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    // ✅ REGISTER
    public User registerUser(RegisterRequest request) {

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());

        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setPhoneNumber(request.getPhoneNumber());
        user.setAddress(request.getAddress());
        user.setGender(request.getGender());
        user.setRole(request.getRole());

        return userRepository.save(user);
    }

    // ✅ GET ALL USERS (FIX 1)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // ✅ DELETE USER BY ID (FIX 2)
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    // ✅ LOGIN
    public LoginResponse loginUser(LoginRequest request) {

        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());

        if (userOpt.isEmpty()) {
            return new LoginResponse("User not found", null, null);
        }

        User user = userOpt.get();

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return new LoginResponse("Invalid password", null, null);
        }

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse(
                "Login successful",
                token,
                user.getRole()
        );
    }
}