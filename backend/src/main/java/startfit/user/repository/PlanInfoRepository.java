package startfit.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import startfit.user.entity.PlanInfoEntity;

public interface PlanInfoRepository extends JpaRepository<PlanInfoEntity, Long> {

}
