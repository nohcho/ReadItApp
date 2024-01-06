import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/config/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])} />
    );
};

export default memo(ArticlesPage);
