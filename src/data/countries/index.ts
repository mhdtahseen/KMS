import { countries as enCountries } from './en';
import { countries as arCountries } from './ar';
import { Country } from './en';

export const getCountries = (locale: string): Country[] => {
  return locale === 'ar' ? arCountries : enCountries;
};

export const getPublishedCountries = (locale: string): Country[] => {
  return getCountries(locale).filter((country) => country.isPublished);
};

export type { Country };
