import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillmatrixServiceService {

  baseUrl = "http://localhost:8090/";
  url = "";
  HttpClient:any;

  constructor(private http: HttpClient) { }

  
public details(empid,name,projectName,primarySkill1,levelp1,primarySkill1details,primarySkill2,levelp2,
  primarySkill2details,secondarySkill1,levels1,secondarySkill1details,secondarySkill2,levels2,
  secondarySkill2details,totalExperience,experienceInAtyeti,short,long,role,SME,certificationInPast1,
  certificationInPast2,certificationSource1,certificationSource2,certificationInAtyeti1,
  certificationInAtyeti2,certificationAtyetiSource1,certificationAtyetiSource2,ongoingCertificate):Observable<any>
  {
    console.log("Ongoing"+ongoingCertificate)
  this.url=this.baseUrl+"skillMatrixSave";
  return this.http.post(this.url,{"empid":empid,"name":name,"projectName":projectName,"primarySkill1":primarySkill1,
  "levelp1":levelp1,"primarySkill1details":primarySkill1details,"primarySkill2":primarySkill2,
  "levelp2":levelp2,"primarySkill2details":primarySkill2details,"secondarySkill1":secondarySkill1,
  "levels1":levels1,"secondarySkill1details":secondarySkill1details,"secondarySkill2":secondarySkill2,
  "levels2":levels2,"secondarySkill2details":secondarySkill2details,"totalExperience":totalExperience,
  "experienceInAtyeti":experienceInAtyeti,"shortTerm":short,"longTerm":long,"role":role,"sme":SME,
  "certificationInPast1":certificationInPast1,"certificationInPast2":certificationInPast2,
  "certificationSource1":certificationSource1,"certificationSource2":certificationSource2,
  "certificationInAtyeti1":certificationInAtyeti1,"certificationInAtyeti2":certificationInAtyeti2,
  "certificationAtyetiSource1":certificationAtyetiSource1,"certificationAtyetiSource2":certificationAtyetiSource2,
  "ongoingCertificate":ongoingCertificate});
}

public skillDetails():Observable<any>{
  this.url=this.baseUrl+"SkillMatrixDetails";
  return this.http.get(this.url);

}
}
