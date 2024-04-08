package misfinanzas.springbootbackend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import misfinanzas.springbootbackend.entities.UserEntity;
import misfinanzas.springbootbackend.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    //Obtener todos los usuarios
    public List<UserEntity>  getAllUsers(){
        return (List<UserEntity>) userRepository.findAll();
    }
    
}
