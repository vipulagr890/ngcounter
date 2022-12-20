import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : "counter", component: CounterComponent},
  {path: "home", component: HomeComponent},
  {path: "", redirectTo: "home", pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
