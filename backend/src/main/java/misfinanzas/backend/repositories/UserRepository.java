package misfinanzas.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import misfinanzas.backend.entities.UserEntity;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {
} 