package misfinanzas.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import misfinanzas.backend.entities.CategoryEntity;
import misfinanzas.backend.entities.ExpenseEntity;
import misfinanzas.backend.entities.UserEntity;
import misfinanzas.backend.services.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;


    // Permite obtener todos los usuarios del sistema.
    @GetMapping("/all")
    public List<UserEntity> getAllUsers(){

        return userService.getAllUsers();
    }

    @GetMapping("/expenses/{id_user}")
    public List<ExpenseEntity> findExpensesByUserId(@PathVariable Long id_user) {
        return userService.findExpensesByUserId(id_user);
    }

    // Obtener todas las categorias guardadas por un usuario
    @GetMapping("/categories/{id_user}")
    public List<CategoryEntity> findCategoryEntities(@PathVariable Long id_user){
        return userService.findCategoriesByUserId(id_user);
    }
    

    
    
}