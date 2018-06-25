import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { RootStoreEffects } from './root-store.effects';

describe('RootStoreService', () => {
  const actions$: Observable<any> = of([]);
  let effects: RootStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RootStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(RootStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
