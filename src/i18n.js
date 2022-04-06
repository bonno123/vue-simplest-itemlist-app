import { createI18n } from "vue-i18n";
import enTrans from "./locale/en.json";
import bnTrans from "./locale/bn.json";

const messages = { en: enTrans, bn: bnTrans };

const i18n = createI18n({
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

export default i18n;
