package misfinanzas.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import misfinanzas.backend.entities.CategoryEntity;
import misfinanzas.backend.repositories.CategoryRepository;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    //Obtener todos las categorías
    public List<CategoryEntity>  getAllCategories(){
        return (List<CategoryEntity>) categoryRepository.findAll();
    }
    
}