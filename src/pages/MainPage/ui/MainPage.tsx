import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Text, TextTheme } from 'shared/ui/Text/Text';

const MainPage = () => {
    const { t } = useTranslation('');
    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <p>{t('Временный счетчик для проверки')}</p>
            <Text
                theme={TextTheme.ERROR}
                title={t('Для того, чтобы войти запустите бэкенд и введите логин и пароль, указанный в README')}
            />
        </div>
    );
};
export default MainPage;
