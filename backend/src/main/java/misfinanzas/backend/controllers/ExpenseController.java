package misfinanzas.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import misfinanzas.backend.entities.ExpenseEntity;
import misfinanzas.backend.services.ExpenseService;

@RestController
@CrossOrigin("*")
@RequestMapping("/expenses")
public class ExpenseController {

    @Autowired
    ExpenseService expenseService;


    // Permite obtener todos los usuarios del sistema.
    @GetMapping()
    public List<ExpenseEntity> getAllExpenses(){

        return expenseService.getAllExpenses();
    }
    
}