import { classNames } from 'shared/config/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <LoginForm />
    </Modal>
);
