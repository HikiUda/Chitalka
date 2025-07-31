import { createContext, ReactNode, useState, useCallback, useMemo, useContext } from 'react';
import { AppLang } from './i18n';
import { appLangLocalStorage } from './i18nLocalStorage';

type i18nContextProps = {
    lang: AppLang;
    setLang: (lang: AppLang) => void;
};
const i18nContext = createContext<i18nContextProps | null>(null);

export function AppLangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState(appLangLocalStorage.get().lang);
    const handleSetAppLang = useCallback((newLang: AppLang) => {
        setLang(newLang);
        appLangLocalStorage.set({ lang: newLang });
    }, []);
    const context = useMemo(() => {
        return {
            lang,
            setLang: handleSetAppLang,
        };
    }, [lang, handleSetAppLang]);
    return <i18nContext.Provider value={context}>{children}</i18nContext.Provider>;
}

export function useAppLangContext() {
    const context = useContext(i18nContext);
    if (!context) throw new Error('lang not provided');
    return context;
}
export function useAppLang() {
    const { lang, setLang } = useAppLangContext();
    const toggleLang = useCallback(
        (newLang?: AppLang) => {
            const resolveLang = newLang || lang === 'ru' ? 'en' : 'ru';
            setLang(resolveLang);
        },
        [lang, setLang],
    );
    return { lang, toggleLang };
}
