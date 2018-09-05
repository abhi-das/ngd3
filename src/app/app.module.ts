import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";

// import { BootstrapModules } from "./bootstrap.module";
import { NgMaterialModules } from "./angular.material.module";
import { D3Service } from "d3-ng2-service";

import { MainNavComponent } from "./main-nav/main-nav.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FormComponent } from "./components/form/form.component";
import { InpfieldComponent } from "./components/inpfield/inpfield.component";

import { NoteComponent } from "./note/note.component";
import { HomeComponent } from "./home/home.component";
import { GrphComponent } from "./components/grph/grph.component";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    NoteComponent,
    HomeComponent,
    FormComponent,
    InpfieldComponent,
    GrphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    // BootstrapModules,
    NgMaterialModules
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule {}
