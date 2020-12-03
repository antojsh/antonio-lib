import { NgModule } from '@angular/core';
import { AntonioLibComponent } from './antonio-lib.component';
import { BtnAntonioDirective } from './directives/btn-antonio/btn-antonio.directive';


@NgModule({
  declarations: [AntonioLibComponent, BtnAntonioDirective],
  imports: [
  ],
  exports: [AntonioLibComponent, BtnAntonioDirective]
})
export class AntonioLibModule { }
