package startfit.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import startfit.user.entity.MyPlanEntity;

public interface MyPlanRepository extends JpaRepository<MyPlanEntity, Long> {
    @Query("SELECT m FROM MyPlanEntity m WHERE SUBSTRING(m.date, 1, 7) = :date AND m.email = :email")
    List<MyPlanEntity> findByMonthAndYear(String date, String email);

    @Query("SELECT m FROM MyPlanEntity m WHERE m.date = :date AND m.email = :email")
    List<MyPlanEntity> findByDay(String date, String email);

}
