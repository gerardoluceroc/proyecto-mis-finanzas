package misfinanzas.backend.entities;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "expenses")
@Data
@Getter
@Setter

public class ExpenseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    private float mount;
    private LocalDate date;
    private String description;

    // Relación con UserEntity
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)  // user_id es la columna que se va a utilizar en la tabla de gastos
    private UserEntity user;

    // Relación muchos a muchos con CategoryEntity
    @ManyToMany
    @JoinTable(
        name = "expenses_categories",  // Nombre de la tabla intermedia
        joinColumns = @JoinColumn(name = "expense_id"), // Columna de clave foránea en expense
        inverseJoinColumns = @JoinColumn(name = "category_id") // Columna de clave foránea en category
    )
    private List<CategoryEntity> categories;
    
}
