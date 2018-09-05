import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoteComponent } from "./note/note.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "note",
    component: NoteComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
