import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VansListComponent } from './components/vans-list/vans-list.component';
import { SportsListComponent } from './components/sports-list/sports-list.component';
import { SuvsListComponent } from './components/suvs-list/suvs-list.component';
import { BikesListComponent } from './components/bikes-list/bikes-list.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { VansModalComponent } from './components/vans-modal/vans-modal.component';
import { SuvsModalComponent } from './components/suvs-modal/suvs-modal.component';
import { SportsModalComponent } from './components/sports-modal/sports-modal.component';
import { MotorcyclesModalComponent } from './components/motorcycles-modal/motorcycles-modal.component';
import { BikesModalComponent } from './components/bikes-modal/bikes-modal.component';
import { MotorcyclesListComponent } from './components/motorcycles/motorcycles-list/motorcycles-list.component';
import { ChestListComponent } from './components/chest/chest-list/chest-list.component';
import { ChestModalComponent } from './components/chest/chest-modal/chest-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    VansListComponent,
    SportsListComponent,
    SuvsListComponent,
    BikesListComponent,
    HomeComponent,
    NavbarComponent,
    ParticlesComponent,
    VansModalComponent,
    SuvsModalComponent,
    SportsModalComponent,
    MotorcyclesModalComponent,
    BikesModalComponent,
    MotorcyclesListComponent,
    ChestListComponent,
    ChestModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
