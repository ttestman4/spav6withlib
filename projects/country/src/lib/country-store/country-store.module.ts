import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCountry from './country.reducer';
import { CountryStoreName } from './country.model';

export * from './country.model';
export * from './country.actions';
export * from './country.selectors';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CountryStoreName, fromCountry.reducer),
  ],
  declarations: []
})
export class CountryStoreModule { }
