package misfinanzas.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import misfinanzas.backend.entities.UserEntity;
import misfinanzas.backend.services.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;


    // Permite obtener todos los usuarios del sistema.
    @GetMapping()
    public List<UserEntity> getAllUsers(){

        return userService.getAllUsers();
    }
    
}