import {classNames} from "shared/config/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?:string
}

export const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    О сайте
                </AppLink>
            </div>

        </div>
    );
};

