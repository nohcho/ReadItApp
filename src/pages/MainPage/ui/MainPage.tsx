import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Text, TextTheme } from 'shared/ui/Text/Text';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <p>{t('Временный счетчик для проверки')}</p>
            <Text
                theme={TextTheme.ERROR}
                title={t('Подсказка')}
            />
        </div>
    );
};
export default MainPage;
