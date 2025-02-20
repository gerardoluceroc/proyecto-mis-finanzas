package misfinanzas.backend.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "categories")
@Data
@Getter
@Setter

public class CategoryEntity {

    //Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String name;

    // Relación muchos a muchos con ExpenseEntity
    @ManyToMany(mappedBy = "categories")
    @JsonIgnore  // Evita que el usuario se serialice en cada gasto
    private List<ExpenseEntity> expenses;

    //Se agrega una relacion de muchos es a uno con user para que cada usuario tenga sus propias categorias
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Cada categoría pertenece a un usuario específico
    @JsonIgnore  // Evita que el usuario se serialice en cada gasto
    private UserEntity user;
}
