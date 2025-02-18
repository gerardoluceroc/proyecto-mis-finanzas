package misfinanzas.backend.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Data
@Getter
@Setter

public class UserEntity {

    //Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String name;
    private String lastname;
    private String email;
    private String password;

    // CascadeType.ALL significa que si haces algo en UserEntity, también se aplicará automáticamente a sus categorías:
    //     Si guardas un usuario (persist), sus categorías también se guardan.
    //     Si actualizas un usuario (merge), sus categorías también se actualizan.
    //     Si eliminas un usuario (remove), sus categorías también se eliminan.

    // orphanRemoval = true
    // Este atributo indica que si una categoría deja de estar asociada a un usuario, debe eliminarse de la base de datos automáticament

    //Relación de uno es a muchos con categorias para que cada usuario tenga sus propias categorias
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CategoryEntity> categories;
}

