package misfinanzas.backend.entities;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import misfinanzas.backend.dtos.Role;

@NoArgsConstructor
@AllArgsConstructor
@Entity
//no se puede repetir el email en la base de datos 
@Table(name = "users", uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})})
@Data
@Builder

//@Builder(toBuilder = true) // Esto permite que el builder no dependa solo del constructor


public class UserEntity implements UserDetails {

    //Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String name;
    private String lastname;
    private String email;
    private String password;
    private Role role;

    // CascadeType.ALL significa que si haces algo en UserEntity, también se aplicará automáticamente a sus categorías:
    //     Si guardas un usuario (persist), sus categorías también se guardan.
    //     Si actualizas un usuario (merge), sus categorías también se actualizan.
    //     Si eliminas un usuario (remove), sus categorías también se eliminan.

    // orphanRemoval = true
    // Este atributo indica que si una categoría deja de estar asociada a un usuario, debe eliminarse de la base de datos automáticament

    //Relación de uno es a muchos con categorias para que cada usuario tenga sus propias categorias
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CategoryEntity> categories;





    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    // @Override
    // public String getUsername() {

    //     throw new UnsupportedOperationException("Unimplemented method 'getUsername'");
    // }

    @Override
    public String getUsername() {
        return this.email; // Devuelve el email como el nombre de usuario
    }

}

