package misfinanzas.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import misfinanzas.backend.entities.UserEntity;
import misfinanzas.backend.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    //Obtener todos los usuarios
    public List<UserEntity>  getAllUsers(){
        return (List<UserEntity>) userRepository.findAll();
    }
    
}