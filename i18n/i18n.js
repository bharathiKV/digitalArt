import en from './locales/en.json';
import ta from './locales/ta.json';
export default {
  strategy: 'no_prefix',
  skipSettingLocaleOnNavigate: true,
  locales: ['en', 'ta'],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en,
      ta
    }
  }
}
