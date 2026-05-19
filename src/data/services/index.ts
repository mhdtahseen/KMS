import { services as servicesEn, Service } from './en';
import { servicesAr } from './ar';

export type { Service };

export const getServices = (locale: string): Service[] => {
  return locale === 'ar' ? servicesAr : servicesEn;
};

export const getPublishedServices = (locale: string): Service[] => {
  return getServices(locale).filter((service) => service.isPublished);
};
