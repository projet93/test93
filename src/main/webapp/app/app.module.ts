import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Fff93SharedModule } from 'app/shared/shared.module';
import { Fff93CoreModule } from 'app/core/core.module';
import { Fff93AppRoutingModule } from './app-routing.module';
import { Fff93HomeModule } from './home/home.module';
import { Fff93EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Fff93SharedModule,
    Fff93CoreModule,
    Fff93HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Fff93EntityModule,
    Fff93AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Fff93AppModule {}
