package misfinanzas.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import misfinanzas.backend.entities.CategoryEntity;
import misfinanzas.backend.entities.ExpenseEntity;
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

    // Obtener todos los gastos de un usuario
    public List<ExpenseEntity> findExpensesByUserId(Long user_id){
        return userRepository.findExpensesByUserId(user_id);
    }

    // Obtener todas las categorias guardadas por un usuario
    public List<CategoryEntity> findCategoriesByUserId(Long user_id){
        return userRepository.findCategoriesByUserId(user_id);
    }
    
}