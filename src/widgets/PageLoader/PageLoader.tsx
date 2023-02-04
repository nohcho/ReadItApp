import { Loader } from 'shared/ui/Loader/Loader';
import cls from 'widgets/PageLoader/PageLoade.module.scss';
import { classNames } from 'shared/config/lib/classNames/classNames';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
