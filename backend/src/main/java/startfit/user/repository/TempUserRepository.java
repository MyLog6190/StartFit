package startfit.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import startfit.user.entity.TempUserEntity;

public interface TempUserRepository extends JpaRepository<TempUserEntity, Long> {

    TempUserEntity findByEmail(String email);

    boolean existsByEmail(String email);

}