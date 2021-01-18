import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './modules/layout/header/header.component';
// import { FooterComponent } from './modules/layout/footer/footer.component';

import {LayoutModule} from "./modules/layout/layout.module";
import {HomeModule} from "./modules/home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
