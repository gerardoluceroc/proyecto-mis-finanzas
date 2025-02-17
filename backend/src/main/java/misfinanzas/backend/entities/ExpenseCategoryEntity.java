// package misfinanzas.backend.entities;

// import jakarta.persistence.*;
// import lombok.Data;
// import lombok.Getter;
// import lombok.Setter;

// @Entity
// @Table(name = "expense_categories")
// @Data
// @Getter
// @Setter
// public class ExpenseCategoryEntity {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @ManyToOne
//     @JoinColumn(name = "expense_id", referencedColumnName = "id")
//     private ExpenseEntity expense;  // Relación con ExpenseEntity

//     @ManyToOne
//     @JoinColumn(name = "category_id", referencedColumnName = "id")
//     private CategoryEntity category;  // Relación con CategoryEntity
// }
