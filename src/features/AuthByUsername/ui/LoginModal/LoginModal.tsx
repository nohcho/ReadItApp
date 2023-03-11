import { classNames } from 'shared/config/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?:string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (
    {
        className,
        onClose,
        isOpen,
    }:LoginModalProps,
) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <LoginForm />
    </Modal>
);
