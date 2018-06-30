import { CountryStoreModule } from './country-store.module';

describe('CountryStoreModule', () => {
  let countryStoreModule: CountryStoreModule;

  beforeEach(() => {
    countryStoreModule = new CountryStoreModule();
  });

  it('should create an instance', () => {
    expect(countryStoreModule).toBeTruthy();
  });
});
