package misfinanzas.backend.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import misfinanzas.backend.dtos.AuthResponseDTO;
import misfinanzas.backend.dtos.LoginRequestDTO;
import misfinanzas.backend.dtos.RegisterRequestDTO;
import misfinanzas.backend.dtos.Role;
import misfinanzas.backend.entities.UserEntity;
import misfinanzas.backend.repositories.UserRepository;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponseDTO login(LoginRequestDTO request){
        // System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: "+new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        try {
            System.out.println("Intentando autenticar usuario: " + request.getEmail());
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            System.out.println("Autenticación exitosa");
        } catch (Exception e) {
            System.out.println("Error en la autenticación: " + e.getClass().getSimpleName() + " - " + e.getMessage());
        }
        
        // authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        UserDetails user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token = jwtService.getToken(user);
        return AuthResponseDTO.builder().token(token).build();
    }

    // public AuthResponseDTO login(LoginRequestDTO request) {
    //     try {
    //         authenticationManager.authenticate(
    //             new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
    //         );
    //     } catch (Exception e) {
    //         throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Credenciales inválidas", e);
    //     }

    //     UserDetails user = userRepository.findByEmail(request.getEmail())
    //                         .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario no encontrado"));

    //     String token = jwtService.getToken(user);
    //     return AuthResponseDTO.builder().token(token).build();
    // }

    public AuthResponseDTO register(RegisterRequestDTO request){
        UserEntity user = UserEntity.builder()
                            .name(request.getName())
                            .lastname(request.getLastname())
                            .email(request.getEmail())
                            .password(passwordEncoder.encode(request.getPassword()))
                            .role(Role.USER)
                            .build();

        userRepository.save(user);
        return AuthResponseDTO.builder()
                    .token(jwtService.getToken(user))
                    .build();
    }
}
