import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateSondageComponentComponent } from './create-sondage-component/create-sondage-component.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { ListeSondageComponentComponent } from './liste-sondage-component/liste-sondage-component.component';
import {MatSelectModule} from '@angular/material/select';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import {RouterModule, Routes} from '@angular/router';
import { AjoutLieuComponentComponent } from './ajout-lieu-component/ajout-lieu-component.component';
import { AjoutDateComponentComponent } from './ajout-date-component/ajout-date-component.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { OwnSondageComponentComponent } from './own-sondage-component/own-sondage-component.component';
import { ConnexionComponentComponent } from './connexion-component/connexion-component.component';
import { CreateUserComponentComponent } from './create-user-component/create-user-component.component';
import {MatIconModule} from '@angular/material/icon';
import {DoodleServiceService} from './doodle-service.service';
import {IntermediaireServiceService} from './intermediaire-service.service';
const appRoutes: Routes = [
    { path: 'create', component: CreateSondageComponentComponent},
    { path: 'lieu', component: AjoutLieuComponentComponent},
    { path: 'date', component: AjoutDateComponentComponent},
    { path: 'listeDesSondages', component: ListeSondageComponentComponent},
    { path: 'ownSondages', component: OwnSondageComponentComponent},
    { path: 'connexion', component: ConnexionComponentComponent},
    { path: 'createUser', component: CreateUserComponentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CreateSondageComponentComponent,
    ListeSondageComponentComponent,
    NavBarComponentComponent,
    AjoutLieuComponentComponent,
    AjoutDateComponentComponent,
    OwnSondageComponentComponent,
    ConnexionComponentComponent,
    CreateUserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [DoodleServiceService, IntermediaireServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
