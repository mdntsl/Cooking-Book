import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AllComponent } from './components/all/all.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { OneRecipeComponent } from './components/one-recipe/one-recipe.component';
import { UpdateformComponent } from './components/updateform/updateform.component';

const appRoutes : Routes = [
  { path:'' ,component: MainPageComponent},
  { path:':id', component:OneRecipeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllComponent,
    AddFormComponent,
    MainPageComponent,
    OneRecipeComponent,
    UpdateformComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
