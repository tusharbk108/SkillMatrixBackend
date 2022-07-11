package com.skillMatrix.skillMatrix.Controller;

import com.skillMatrix.skillMatrix.Model.SkillMatrixEntity;
import com.skillMatrix.skillMatrix.Repository.SkillMatrixRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class SkillMatrixController {

    @Autowired
    SkillMatrixRepo skillMatrixRepo;

    @PostMapping("skillMatrixSave")
    public SkillMatrixEntity skillMatrixSave(@RequestBody SkillMatrixEntity skillMatrix)
    {
        System.out.println(skillMatrix.getEmpid());
       return skillMatrixRepo.save(skillMatrix);
    }
}
