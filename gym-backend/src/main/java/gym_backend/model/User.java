package gym_backend.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    private String email;

    private String password;
    private String phoneNumber;
    private String address;
    private String age;
    private String gender;
}