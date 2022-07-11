package com.skillMatrix.skillMatrix.Model;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Data
@Table(name = "SkillDetails")
public class SkillMatrixEntity {
    @Id
    @Column(name = "empid")
    private int empid;

    @Column(name = "name")
    private String name;

    @Column(name = "ProjectName")
    private String projectName;

    @Column(name = "PrimarySkill1")
    private String primarySkill1;

    @Column(name = "LevelPrimarySkill1")
    private String levellp1;

    @Column(name = "primarySkill1details")
    private String primarySkill1details;

    @Column(name = "PrimarySkill2")
    private String primarySkill2;

    @Column(name = "LevelPrimarySkill2")
    private String levelp2;

    @Column(name = "primarySkill2details")
    private String primarySkill2details;

    @Column(name = "SecondarySkill1")
    private String secondarySkill1;

    @Column(name = "LevelSecondarySkill1")
    private String levels1;

    @Column(name = "SecondarySkill1details")
    private String secondarySkill1details;

    @Column(name = "SecondarySkill2")
    private String secondarySkill2;

    @Column(name = "LevelSecondarySkill2")
    private String levels2;

    @Column(name = "SecondarySkill2details")
    private String secondarySkill2details;

    @Column(name = "TotalExperince")
    private String totalExperience;

    @Column(name = "ExperienceInAtyeti")
    private String ExperienceInAtyeti;

    @Column(name = "ShortTermAspiration")
    private String shortTerm;

    @Column(name = "LongTermAspiration")
    private String longTerm;

    @Column(name = "Role")
    private String role;

    @Column(name = "SME")
    private String SME;

    @Column(name = "CertificationInPast1")
    private String certificationInPast1;

    @Column(name = "CertificationInPast2")
    private String certificationInPast2;

    @Column(name = "CertificationSource1")
    private String certificationSource1;

    @Column(name = "CertificationSource2")
    private String certificationSorce2;

    @Column(name = "CertificationInAtyeti1")
    private String certificationInAtyeti1;

    @Column(name = "CertificationInAtyeti2")
    private String certificationInAtyeti2;


    @Column(name = "CertificationAtyetiSource1")
    private String certificationAtyetiSource1;

    @Column(name = "CertificationAtyetiSource2")
    private String certificationAtyetiSorce2;

    @Column(name = "OngoingCertification")
    private String ongoingCertificate;



    public SkillMatrixEntity(int empid, String name, String projectName, String primarySkill1, String levellp1, String primarySkill1details, String primarySkill2, String levelp2, String primarySkill2details, String secondarySkill1, String levels1, String secondarySkill1details, String secondarySkill2, String levels2, String secondarySkill2details, String totalExperience, String ExperienceInAtyeti, String shortTerm, String longTerm, String role, String SME, String certificationInPast1, String certificationInPast2, String certificationSource1, String certificationSorce2, String certificationInAtyeti1, String certificationInAtyeti2, String certificationAtyetiSource1, String certificationAtyetiSorce2, String ongoingCertificate) {
        this.empid = empid;
        this.name = name;
        this.projectName = projectName;
        this.primarySkill1 = primarySkill1;
        this.levellp1 = levellp1;
        this.primarySkill1details = primarySkill1details;
        this.primarySkill2 = primarySkill2;
        this.levelp2 = levelp2;
        this.primarySkill2details = primarySkill2details;
        this.secondarySkill1 = secondarySkill1;
        this.levels1 = levels1;
        this.secondarySkill1details = secondarySkill1details;
        this.secondarySkill2 = secondarySkill2;
        this.levels2 = levels2;
        this.secondarySkill2details = secondarySkill2details;
        this.totalExperience = totalExperience;
        this.ExperienceInAtyeti = ExperienceInAtyeti;
        this.shortTerm = shortTerm;
        this.longTerm = longTerm;
        this.role = role;
        this.SME = SME;
        this.certificationInPast1 = certificationInPast1;
        this.certificationInPast2 = certificationInPast2;
        this.certificationSource1 = certificationSource1;
        this.certificationSorce2 = certificationSorce2;
        this.certificationInAtyeti1 = certificationInAtyeti1;
        this.certificationInAtyeti2 = certificationInAtyeti2;
        this.certificationAtyetiSource1 = certificationAtyetiSource1;
        this.certificationAtyetiSorce2 = certificationAtyetiSorce2;
        this.ongoingCertificate = ongoingCertificate;
    }


    public SkillMatrixEntity() {
    }
}
