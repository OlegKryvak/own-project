import { I18n } from 'i18n-js';
import de from './languages/de';
import en from './languages/en';
import es from './languages/es';
import jp from './languages/jp';
import pt from './languages/pt';
import ru from './languages/ru';
import zh from './languages/zh';

// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n({
  de,
  en,
  es,
  jp,
  pt,
  ru,
  zh
});

// Set the locale once at the beginning of your app.
i18n.locale = 'en';

export default i18n;
