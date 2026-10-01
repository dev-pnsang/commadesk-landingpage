import type { Language, ModuleMenuItem } from './types';
import { en, modulesEn, type TranslationSchema } from './locales/en';
import { vi, modulesVi } from './locales/vi';

export type { Language, ModuleMenuItem, TranslationSchema };

export const MODULE_ITEMS: Record<Language, ModuleMenuItem[]> = {
  en: modulesEn,
  vi: modulesVi,
};

export const translations = {
  en,
  vi,
} as const;
