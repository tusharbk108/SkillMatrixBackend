package com.skillMatrix.skillMatrix.Repository;

import com.skillMatrix.skillMatrix.Model.SkillMatrixEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillMatrixRepo extends JpaRepository<SkillMatrixEntity,Integer> {
}
