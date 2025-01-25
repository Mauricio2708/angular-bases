import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CounterModule {

}
