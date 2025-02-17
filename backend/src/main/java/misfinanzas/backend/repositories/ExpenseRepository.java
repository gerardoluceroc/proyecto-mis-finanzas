package misfinanzas.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import misfinanzas.backend.entities.ExpenseEntity;

@Repository
public interface ExpenseRepository extends CrudRepository<ExpenseEntity, Long> {
} 
