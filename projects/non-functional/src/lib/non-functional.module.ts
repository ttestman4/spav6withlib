import { NgModule } from '@angular/core';
import { NonFunctionalComponent } from './non-functional.component';
import { RootStoreModule } from './root-store/root-store.module';

@NgModule({
  imports: [
  RootStoreModule],
  declarations: [NonFunctionalComponent],
  exports: [NonFunctionalComponent]
})
export class NonFunctionalModule { }
