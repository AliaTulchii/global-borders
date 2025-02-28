import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            'Welcome to React': "Welcome to React ans react-i18next"
        }
    },
    az:{
        translation: {
        'Welcome to React': "here must be azerbajan language"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation:{
            escapeValue: false
        }
    });

    export default i18n;