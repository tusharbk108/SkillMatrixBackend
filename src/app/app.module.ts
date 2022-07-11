import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from'@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillMatrixComponent } from './skill-matrix/skill-matrix.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillDetailsComponent } from './skill-details/skill-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillMatrixComponent,
    SkillDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
