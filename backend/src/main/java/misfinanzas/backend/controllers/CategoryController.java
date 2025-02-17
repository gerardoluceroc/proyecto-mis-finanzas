package misfinanzas.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import misfinanzas.backend.entities.CategoryEntity;
import misfinanzas.backend.services.CategoryService;

@RestController
@CrossOrigin("*")
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;


    // Permite obtener todos las categroias del sistema.
    @GetMapping()
    public List<CategoryEntity> getAllCategories(){

        return categoryService.getAllCategories();
    }
    
}