import {
    FC, useEffect, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { initialTheme, children } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    useEffect(() => {
        document.body.classList.add(theme);

        return () => {
            document.body.classList.remove(theme);
        };
    }, [theme]);
    // добавил для того, чтобы тесты проходил через CI или Husky
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
