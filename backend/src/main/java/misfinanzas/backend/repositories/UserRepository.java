package misfinanzas.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import misfinanzas.backend.entities.CategoryEntity;
import misfinanzas.backend.entities.ExpenseEntity;
import misfinanzas.backend.entities.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    // Obtener todos los gastos de un usuario especifico
    @Query("SELECT e FROM ExpenseEntity e WHERE e.user.id = :userId")
    List<ExpenseEntity> findExpensesByUserId(@Param("userId") Long userId);

    // Obtener todas las categorias guardadas por un usuario
    @Query("SELECT c FROM CategoryEntity c WHERE c.user.id = :userId")
    List<CategoryEntity> findCategoriesByUserId(@Param("userId") Long userId);
    
} 