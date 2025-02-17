package misfinanzas.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import misfinanzas.backend.entities.ExpenseEntity;
import misfinanzas.backend.repositories.ExpenseRepository;

@Service
public class ExpenseService {

    @Autowired
    ExpenseRepository expenseRepository;

    //Obtener todos los gastos
    public List<ExpenseEntity>  getAllExpenses(){
        return (List<ExpenseEntity>) expenseRepository.findAll();
    }
    
}