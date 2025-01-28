import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { heroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    heroesModule,
    AppRoutingModule,
    DbzModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
