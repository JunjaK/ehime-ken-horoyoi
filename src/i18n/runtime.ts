import { en } from './locales/en.ts';
import { jp } from './locales/jp.ts';
import { ko } from './locales/ko.ts';

export type Locale = 'ko' | 'en' | 'jp';
export type MessageKey = keyof typeof ko;
type Variables = Record<string, number | string>;

const messages = { ko, en, jp } satisfies Record<Locale, Record<MessageKey, string>>;
const listeners = new Set<() => void>();
let currentLocale: Locale | null = null;

const isLocale = (value: string | null): value is Locale => value === 'ko' || value === 'en' || value === 'jp';

function interpolate(message: string, variables: Variables) {
  return message.replace(/\{(\w+)\}/g, (match, key: string) => String(variables[key] ?? match));
}

export function uiText(locale: Locale, key: MessageKey, variables: Variables = {}) {
  return interpolate(messages[locale][key], variables);
}

export function getLocale(): Locale {
  if (currentLocale) return currentLocale;
  const saved = localStorage.getItem('ehime-locale');
  if (isLocale(saved)) currentLocale = saved;
  else if (navigator.language.toLowerCase().startsWith('ja')) currentLocale = 'jp';
  else if (navigator.language.toLowerCase().startsWith('en')) currentLocale = 'en';
  else currentLocale = 'ko';
  return currentLocale;
}

function localizedValue(element: HTMLElement, locale: Locale) {
  if (locale === 'ko') return element.dataset.l10nKo;
  if (locale === 'en') return element.dataset.l10nEn;
  return element.dataset.l10nJp;
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = locale === 'jp' ? 'ja' : locale;
  document.title = uiText(locale, 'page.title');
  document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', uiText(locale, 'page.description'));

  for (const element of document.querySelectorAll<HTMLElement>('[data-i18n]')) {
    const key = element.dataset.i18n as MessageKey | undefined;
    if (!key || !(key in messages[locale])) continue;
    const variables = element.dataset.i18nVars ? JSON.parse(element.dataset.i18nVars) as Variables : {};
    element.textContent = uiText(locale, key, variables);
  }
  for (const element of document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]')) {
    const key = element.dataset.i18nPlaceholder as MessageKey | undefined;
    if (key && key in messages[locale]) element.placeholder = uiText(locale, key);
  }
  for (const element of document.querySelectorAll<HTMLElement>('[data-i18n-aria]')) {
    const key = element.dataset.i18nAria as MessageKey | undefined;
    if (key && key in messages[locale]) element.setAttribute('aria-label', uiText(locale, key));
  }
  for (const element of document.querySelectorAll<HTMLElement>('[data-i18n-title]')) {
    const key = element.dataset.i18nTitle as MessageKey | undefined;
    if (key && key in messages[locale]) element.title = uiText(locale, key);
  }
  for (const element of document.querySelectorAll<HTMLElement>('[data-l10n-ko]')) {
    const value = localizedValue(element, locale);
    if (value !== undefined) {
      element.textContent = value;
      element.hidden = value.length === 0;
    }
  }
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-locale]')) {
    const active = button.dataset.locale === locale;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('bg-foreground', active);
    button.classList.toggle('text-background', active);
  }
}

export function setLocale(locale: Locale) {
  currentLocale = locale;
  localStorage.setItem('ehime-locale', locale);
  applyLocale(locale);
  for (const listener of listeners) listener();
}

export function onLocaleChange(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function initializeLocale() {
  const locale = getLocale();
  applyLocale(locale);
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-locale]')) {
    const value = button.dataset.locale;
    if (value && isLocale(value)) {
      const buttonLocale = value;
      button.addEventListener('click', () => setLocale(buttonLocale));
    }
  }
}
