import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t, i18n } = useTranslation('');
    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <p>{t('Временный счетчик для проверки')}</p>
        </div>
    );
};
export default MainPage;
