import { Component, OnInit } from '@angular/core';
import { SkillmatrixServiceService } from '../skillmatrix-service.service';

@Component({
  selector: 'app-skill-matrix',
  templateUrl: './skill-matrix.component.html',
  styleUrls: ['./skill-matrix.component.css']
})
export class SkillMatrixComponent implements OnInit {
  SME: string;
  response: string[] = ['Yes', 'No'];

  empid;
  name;
  projectName;
  primarySkill1;
  primarySkill1details;
  primarySkill2;
  primarySkill2details;
  secondarySkill1;
  secondarySkill1details;
  secondarySkill2;
  secondarySkill2details;
  totalExperience;
  experienceInAtyeti;
  short;
  long;
  certificationInPast1;
  certificationInPast2;
  certificationSource1;
  certificationSource2;
  certificationInAtyeti1;
  certificationInAtyeti2;
  certificationAtyetiSource1;
  certificationAtyetiSource2;
  ongoingCertificate;

  selectpri1;
  selectpri2;
  selectsec1;
  selectsec2;
  chosenModpri1: string = "";
  chosenModpri2: string = "";
  chosenModsec1: string = "";
  chosenModsec2: string = "";

  selectlp1;
  selectlp2;
  selectls1;
  selectls2;
  chosenModlp1: string = "";
  chosenModlp2: string = "";
  chosenModls1: string = "";
  chosenModls2: string = "";

  selectrole;
  chosenModrole: string = "";

  divfrontendpri1=false;
  divbackendpri1=false;
  divdatabasepri1=false;
  divfullstackpri1=false;
  divdatasciencepri1=false;
  divtestingpri1=false;
  divdevopspri1=false;
  divcloudpri1=false;
  divotherpri1=false;

  divfrontendpri2=false;
  divbackendpri2=false;
  divdatabasepri2=false;
  divfullstackpri2=false;
  divdatasciencepri2=false;
  divtestingpri2=false;
  divdevopspri2=false;
  divcloudpri2=false;
  divotherpri2=false;

  divfrontendsec1=false;
  divbackendsec1=false;
  divdatabasesec1=false;
  divfullstacksec1=false;
  divdatasciencesec1=false;
  divtestingsec1=false;
  divdevopssec1=false;
  divcloudsec1=false;
  divothersec1=false;

  divfrontendsec2=false;
  divbackendsec2=false;
  divdatabasesec2=false;
  divfullstacksec2=false;
  divdatasciencesec2=false;
  divtestingsec2=false;
  divdevopssec2=false;
  divcloudsec2=false;
  divothersec2=false;

  data: any;

  constructor( private skillmatrix:SkillmatrixServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("name"+this.name);
    this.skillmatrix.details(this.empid,this.name,this.projectName,this.chosenModpri1,this.chosenModlp1,this.primarySkill1details,
      this.chosenModpri2,this.chosenModlp2,this.primarySkill2details,this.chosenModsec1,this.chosenModls1,
      this.secondarySkill1details,this.chosenModsec2,this.chosenModls2,this.secondarySkill2details,
      this.totalExperience,this.experienceInAtyeti,this.short,this.long,this.chosenModrole,this.SME,
      this.certificationInPast1,this.certificationInPast2,this.certificationSource1,this.certificationSource2,
      this.certificationInAtyeti1,this.certificationInAtyeti2,this.certificationAtyetiSource1,
      this.certificationAtyetiSource2,this.ongoingCertificate)
      .subscribe(data =>
        {
          this.data=data;
          console.log(this.data);
          alert("Your response is submitted successfully!!");
          //location.reload();
        },error=>console.log(error))
  }

primodo1(){
  console.log("primodo1")
  switch(this.chosenModpri1) {  
     case "Frontend": { 
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      this.divotherpri1=false;
       console.log("Frontend");
       this.selectpri1='Frontend';
       this.divfrontendpri1=true;
        break;
     }
     case "Backend": { 
      this.divfrontendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      this.divotherpri1=false;
      console.log("Backend");
      this.selectpri1='Backend';
      this.divbackendpri1=true;
       break;
    }
    case "Database": { 
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      this.divotherpri1=false;
      console.log("Database");
      this.selectpri1='Database';
      this.divdatabasepri1=true;
       break;
    }
    case "Full Stack": { 
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      this.divotherpri1=false;
      console.log("Full Stack");
      this.selectpri1='Full Stack';
      this.divfullstackpri1=true;
       break;
    }
    case "Data Science": { 
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      this.divotherpri1=false;
      console.log("Data Science");
      this.selectpri1='Data Science';
      this.divdatasciencepri1=true;
       break;
    }
    case "Software Testing": { 
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      this.divotherpri1=false;
      console.log("Software Testing");
      this.selectpri1='Software Testing';
      this.divtestingpri1=true;
       break;
    }
    case "DevOps": { 
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divcloudpri1=false;
      this.divotherpri1=false;
      console.log("DevOps");
      this.selectpri1='DevOps';
      this.divdevopspri1=true;
       break;
    }
    case "Cloud": { 
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divotherpri1=false;
      console.log("Cloud");
      this.selectpri1='Cloud';
      this.divcloudpri1=true;
       break;
    }
    case "Recruitment": {
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      console.log("Other");
      this.selectpri1='Other';
      this.divotherpri1=true;
      break;
    }
    case "PMO":{
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      console.log("Other");
      this.selectpri1='Other';
      this.divotherpri1=true;
      break;
    }
    case "HR":{
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      console.log("Other");
      this.selectpri1='Other';
      this.divotherpri1=true;
      break;
    }
    case "L $ D":{
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      console.log("Other");
      this.selectpri1='Other';
      this.divotherpri1=true;
      break;
    }
    case "BA":{
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      console.log("Other");
      this.selectpri1='Other';
      this.divotherpri1=true;
      break;
    }
    case "Admin":{
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      console.log("Other");
      this.selectpri1='Other';
      this.divotherpri1=true;
      break;
    }
    case "Finance":{
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      console.log("Other");
      this.selectpri1='Other';
      this.divotherpri1=true;
      break;
    }
    case "IT":{
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      console.log("Other");
      this.selectpri1='Other';
      this.divotherpri1=true;
      break;
    }
    case "Other":{
      this.divfrontendpri1=false;
      this.divbackendpri1=false;
      this.divdatabasepri1=false;
      this.divfullstackpri1=false;
      this.divdatasciencepri1=false;
      this.divtestingpri1=false;
      this.divdevopspri1=false;
      this.divcloudpri1=false;
      console.log("Other");
      this.selectpri1='Other';
      this.divotherpri1=true;
    }
  }
}


primodo2(){
  console.log("primodo2")
  switch(this.chosenModpri2) {  
     case "Frontend": { 
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      this.divotherpri2=false;
       console.log("Frontend");
       this.selectpri2='Frontend';
       this.divfrontendpri2=true;
        break;
     }
     case "Backend": { 
      this.divfrontendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      this.divotherpri2=false;
      console.log("Backend");
      this.selectpri2='Backend';
      this.divbackendpri2=true;
       break;
    }
    case "Database": { 
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      this.divotherpri2=false;
      console.log("Database");
      this.selectpri2='Database';
      this.divdatabasepri2=true;
       break;
    }
    case "Full Stack": { 
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      this.divotherpri2=false;
      console.log("Full Stack");
      this.selectpri2='Full Stack';
      this.divfullstackpri2=true;
       break;
    }
    case "Data Science": { 
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      this.divotherpri2=false;
      console.log("Data Science");
      this.selectpri2='Data Science';
      this.divdatasciencepri2=true;
       break;
    }
    case "Software Testing": { 
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      this.divotherpri2=false;
      console.log("Software Testing");
      this.selectpri2='Software Testing';
      this.divtestingpri2=true;
       break;
    }
    case "DevOps": { 
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divcloudpri2=false;
      this.divotherpri2=false;
      console.log("DevOps");
      this.selectpri2='DevOps';
      this.divdevopspri2=true;
       break;
    }
    case "Cloud": { 
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divotherpri2=false;
      console.log("Cloud");
      this.selectpri2='Cloud';
      this.divcloudpri2=true;
       break;
    }
    case "Recruitment":{
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      console.log("Other");
      this.selectpri2='Other';
      this.divotherpri2=true;
      break;
    }
    case "PMO":{
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      console.log("Other");
      this.selectpri2='Other';
      this.divotherpri2=true;
      break;
    }
    case "HR":{
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      console.log("Other");
      this.selectpri2='Other';
      this.divotherpri2=true;
      break;
    }
    case "L & D":{
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      console.log("Other");
      this.selectpri2='Other';
      this.divotherpri2=true;
      break;
    }
    case "BA":{
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      console.log("Other");
      this.selectpri2='Other';
      this.divotherpri2=true;
      break;
    }
    case "Admin":{
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      console.log("Other");
      this.selectpri2='Other';
      this.divotherpri2=true;
      break;
    }
    case "Finance":{
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      console.log("Other");
      this.selectpri2='Other';
      this.divotherpri2=true;
      break;
    }
    case "IT":{
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      console.log("Other");
      this.selectpri2='Other';
      this.divotherpri2=true;
      break;
    }
    case "Other":{
      this.divfrontendpri2=false;
      this.divbackendpri2=false;
      this.divdatabasepri2=false;
      this.divfullstackpri2=false;
      this.divdatasciencepri2=false;
      this.divtestingpri2=false;
      this.divdevopspri2=false;
      this.divcloudpri2=false;
      console.log("Other");
      this.selectpri2='Other';
      this.divotherpri2=true;
    }
  }
}


secmodo1(){
  console.log("secmodo1")
  switch(this.chosenModsec1) {  
     case "Frontend": {
       this.divbackendsec1=false;
       this.divdatabasesec1=false;
       this.divfullstacksec1=false;
       this.divdatasciencesec1=false;
       this.divtestingsec1=false;
       this.divdevopssec1=false;
       this.divcloudsec1=false;
       this.divothersec1=false; 
       console.log("Frontend");
       this.selectsec1='Frontend';
       this.divfrontendsec1=true;
        break;
     }
     case "Backend": { 
      this.divfrontendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      this.divothersec1=false;
      console.log("Backend");
      this.selectsec1='Backend';
      this.divbackendsec1=true;
       break;
    }
    case "Database": { 
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      this.divothersec1=false;
      console.log("Database");
      this.selectsec1='Database';
      this.divdatabasesec1=true;
       break;
    }
    case "Full Stack": { 
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      this.divothersec1=false;
      console.log("Full Stack");
      this.selectsec1='Full Stack';
      this.divfullstacksec1=true;
       break;
    }
    case "Data Science": { 
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      this.divothersec1=false;
      console.log("Data Science");
      this.selectsec1='Data Science';
      this.divdatasciencesec1=true;
       break;
    }
    case "Software Testing": { 
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      this.divothersec1=false;
      console.log("Software Testing");
      this.selectsec1='Software Testing';
      this.divtestingsec1=true;
       break;
    }
    case "DevOps": { 
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divcloudsec1=false;
      this.divothersec1=false;
      console.log("DevOps");
      this.selectsec1='DevOps';
      this.divdevopssec1=true;
       break;
    }
    case "Cloud": { 
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divothersec1=false;
      console.log("Cloud");
      this.selectsec1='Cloud';
      this.divcloudsec1=true;
       break;
    }
    case "Recruitment":{
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      console.log("Other");
      this.selectsec1='Other';
      this.divothersec1=true;
      break;
    }
    case "PMO":{
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      console.log("Other");
      this.selectsec1='Other';
      this.divothersec1=true;
      break;
    }
    case "HR":{
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      console.log("Other");
      this.selectsec1='Other';
      this.divothersec1=true;
      break;
    }
    case "L & D":{
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      console.log("Other");
      this.selectsec1='Other';
      this.divothersec1=true;
      break;
    }
    case "BA":{
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      console.log("Other");
      this.selectsec1='Other';
      this.divothersec1=true;
      break;
    }
    case "Admin":{
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      console.log("Other");
      this.selectsec1='Other';
      this.divothersec1=true;
      break;
    }
    case "Finance":{
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      console.log("Other");
      this.selectsec1='Other';
      this.divothersec1=true;
      break;
    }
    case "IT":{
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      console.log("Other");
      this.selectsec1='Other';
      this.divothersec1=true;
      break;
    }
    case "Other":{
      this.divfrontendsec1=false;
      this.divbackendsec1=false;
      this.divdatabasesec1=false;
      this.divfullstacksec1=false;
      this.divdatasciencesec1=false;
      this.divtestingsec1=false;
      this.divdevopssec1=false;
      this.divcloudsec1=false;
      console.log("Other");
      this.selectsec1='Other';
      this.divothersec1=true;
    }
  }
}


secmodo2(){
  console.log("secmodo2")
  switch(this.chosenModsec2) {  
    case "Frontend": {
      this.divbackendsec2=false;
      this.divdatabasesec2=false;
      this.divfullstacksec2=false;
      this.divdatasciencesec2=false;
      this.divtestingsec2=false;
      this.divdevopssec2=false;
      this.divcloudsec2=false;
      this.divothersec2=false; 
      console.log("Frontend");
      this.selectsec2='Frontend';
      this.divfrontendsec2=true;
       break;
    }
    case "Backend": { 
     this.divfrontendsec2=false;
     this.divdatabasesec2=false;
     this.divfullstacksec2=false;
     this.divdatasciencesec2=false;
     this.divtestingsec2=false;
     this.divdevopssec2=false;
     this.divcloudsec2=false;
     this.divothersec2=false;
     console.log("Backend");
     this.selectsec2='Backend';
     this.divbackendsec2=true;
      break;
   }
   case "Database": { 
     this.divfrontendsec2=false;
     this.divbackendsec2=false;
     this.divfullstacksec2=false;
     this.divdatasciencesec2=false;
     this.divtestingsec2=false;
     this.divdevopssec2=false;
     this.divcloudsec2=false;
     this.divothersec2=false;
     console.log("Database");
     this.selectsec2='Database';
     this.divdatabasesec2=true;
      break;
   }
   case "Full Stack": { 
     this.divfrontendsec2=false;
     this.divbackendsec2=false;
     this.divdatabasesec2=false;
     this.divdatasciencesec2=false;
     this.divtestingsec2=false;
     this.divdevopssec2=false;
     this.divcloudsec2=false;
     this.divothersec2=false;
     console.log("Full Stack");
     this.selectsec2='Full Stack';
     this.divfullstacksec2=true;
      break;
   }
   case "Data Science": { 
     this.divfrontendsec2=false;
     this.divbackendsec2=false;
     this.divdatabasesec2=false;
     this.divfullstacksec2=false;
     this.divtestingsec2=false;
     this.divdevopssec2=false;
     this.divcloudsec2=false;
     this.divothersec2=false;
     console.log("Data Science");
     this.selectsec2='Data Science';
     this.divdatasciencesec2=true;
      break;
   }
   case "Software Testing": { 
     this.divfrontendsec2=false;
     this.divbackendsec2=false;
     this.divdatabasesec2=false;
     this.divfullstacksec2=false;
     this.divdatasciencesec2=false;
     this.divdevopssec2=false;
     this.divcloudsec2=false;
     this.divothersec2=false;
     console.log("Software Testing");
     this.selectsec2='Software Testing';
     this.divtestingsec2=true;
      break;
   }
   case "DevOps": { 
     this.divfrontendsec2=false;
     this.divbackendsec2=false;
     this.divdatabasesec2=false;
     this.divfullstacksec2=false;
     this.divdatasciencesec2=false;
     this.divtestingsec2=false;
     this.divcloudsec2=false;
     this.divothersec2=false;
     console.log("DevOps");
     this.selectsec2='DevOps';
     this.divdevopssec2=true;
      break;
   }
   case "Cloud": { 
     this.divfrontendsec2=false;
     this.divbackendsec2=false;
     this.divdatabasesec2=false;
     this.divfullstacksec2=false;
     this.divdatasciencesec2=false;
     this.divtestingsec2=false;
     this.divdevopssec2=false;
     this.divothersec2=false;
     console.log("Cloud");
     this.selectsec2='Cloud';
     this.divcloudsec2=true;
      break;
   }
   case "Recruitment":{
    this.divfrontendsec2=false;
    this.divbackendsec2=false;
    this.divdatabasesec2=false;
    this.divfullstacksec2=false;
    this.divdatasciencesec2=false;
    this.divtestingsec2=false;
    this.divdevopssec2=false;
    this.divcloudsec2=false;
    console.log("Other");
    this.selectsec2='Other';
    this.divothersec2=true;
    break;
  }
  case "PMO":{
    this.divfrontendsec2=false;
    this.divbackendsec2=false;
    this.divdatabasesec2=false;
    this.divfullstacksec2=false;
    this.divdatasciencesec2=false;
    this.divtestingsec2=false;
    this.divdevopssec2=false;
    this.divcloudsec2=false;
    console.log("Other");
    this.selectsec2='Other';
    this.divothersec2=true;
    break;
  }
  case "HR":{
    this.divfrontendsec2=false;
    this.divbackendsec2=false;
    this.divdatabasesec2=false;
    this.divfullstacksec2=false;
    this.divdatasciencesec2=false;
    this.divtestingsec2=false;
    this.divdevopssec2=false;
    this.divcloudsec2=false;
    console.log("Other");
    this.selectsec2='Other';
    this.divothersec2=true;
    break;
  }
  case "L & D":{
    this.divfrontendsec2=false;
    this.divbackendsec2=false;
    this.divdatabasesec2=false;
    this.divfullstacksec2=false;
    this.divdatasciencesec2=false;
    this.divtestingsec2=false;
    this.divdevopssec2=false;
    this.divcloudsec2=false;
    console.log("Other");
    this.selectsec2='Other';
    this.divothersec2=true;
    break;
  }
  case "BA":{
    this.divfrontendsec2=false;
    this.divbackendsec2=false;
    this.divdatabasesec2=false;
    this.divfullstacksec2=false;
    this.divdatasciencesec2=false;
    this.divtestingsec2=false;
    this.divdevopssec2=false;
    this.divcloudsec2=false;
    console.log("Other");
    this.selectsec2='Other';
    this.divothersec2=true;
    break;
  }
  case "Admin":{
    this.divfrontendsec2=false;
    this.divbackendsec2=false;
    this.divdatabasesec2=false;
    this.divfullstacksec2=false;
    this.divdatasciencesec2=false;
    this.divtestingsec2=false;
    this.divdevopssec2=false;
    this.divcloudsec2=false;
    console.log("Other");
    this.selectsec2='Other';
    this.divothersec2=true;
    break;
  }
  case "Finance":{
    this.divfrontendsec2=false;
    this.divbackendsec2=false;
    this.divdatabasesec2=false;
    this.divfullstacksec2=false;
    this.divdatasciencesec2=false;
    this.divtestingsec2=false;
    this.divdevopssec2=false;
    this.divcloudsec2=false;
    console.log("Other");
    this.selectsec2='Other';
    this.divothersec2=true;
    break;
  }
  case "IT":{
    this.divfrontendsec2=false;
    this.divbackendsec2=false;
    this.divdatabasesec2=false;
    this.divfullstacksec2=false;
    this.divdatasciencesec2=false;
    this.divtestingsec2=false;
    this.divdevopssec2=false;
    this.divcloudsec2=false;
    console.log("Other");
    this.selectsec2='Other';
    this.divothersec2=true;
    break;
  }
   case "Other":{
    this.divfrontendsec2=false;
    this.divbackendsec2=false;
    this.divdatabasesec2=false;
    this.divfullstacksec2=false;
    this.divdatasciencesec2=false;
    this.divtestingsec2=false;
    this.divdevopssec2=false;
    this.divcloudsec2=false;
    console.log("Other");
    this.selectsec2='Other';
    this.divothersec2=true;
  }
  }
}

modolp1(){
  switch(this.chosenModlp1) {  
     case "Beginner": { 
       console.log("Beginner");
       this.selectlp1='Beginner';
       break;
     }
     case "Intermediate": { 
      console.log("Intermediate");
      this.selectlp1="Intermediate";
      break;
     }
     case "Expert": { 
      console.log("Expert");
      this.selectlp1='Expert';
      break;
    }
  }
}

modolp2(){
  switch(this.chosenModlp2) {  
     case "Beginner": { 
       console.log("Beginner");
       this.selectlp2='Beginner';
       break;
     }
     case "Intermediate": { 
      console.log("Intermediate");
      this.selectlp2="Intermediate";
      break;
     }
     case "Expert": { 
      console.log("Expert");
      this.selectlp2='Expert';
      break;
    }
  }
}

modols1(){
  switch(this.chosenModls1) {  
     case "Beginner": { 
       console.log("Beginner");
       this.selectls1='Beginner';
       break;
     }
     case "Intermediate": { 
      console.log("Intermediate");
      this.selectls1="Intermediate";
      break;
     }
     case "Expert": { 
      console.log("Expert");
      this.selectls1='Expert';
      break;
    }
  }
}

modols2(){
  switch(this.chosenModls2) {  
     case "Beginner": { 
       console.log("Beginner");
       this.selectls2='Beginner';
       break;
     }
     case "Intermediate": { 
      console.log("Intermediate");
      this.selectls2="Intermediate";
      break;
     }
     case "Expert": { 
      console.log("Expert");
      this.selectls2='Expert';
      break;
    }
  }
}

modorole(){
  switch(this.chosenModrole) {  
     case "Individual": { 
       console.log("Individual");
       this.selectrole='Individual';
       break;
     }
     case "Team": { 
      console.log("Team");
      this.selectrole="Team";
      break;
     }
  }
}

}
