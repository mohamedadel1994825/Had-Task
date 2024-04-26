import { appStorage } from '../store/store';

const KEYS = {
  LANGUAGE: "language",
  APP_THEME: "APP_THEME",
};

const setLocalization = (languageTag: string) => {
  appStorage.set(KEYS.LANGUAGE, languageTag);
};

const getLocalization = () => {
  console.log('appStorage.getString(KEYS.LANGUAGE);', appStorage.getString(KEYS.LANGUAGE))
  return appStorage.getString(KEYS.LANGUAGE);
}

const getCurrentTheme = () => {
  return appStorage.getString(KEYS.APP_THEME);

}

const setNewTheme = (theme: string) => {
  appStorage.set(KEYS.APP_THEME, theme);
}


export {
  getCurrentTheme, getLocalization, KEYS, setLocalization, setNewTheme
};

