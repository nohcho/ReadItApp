import { classNames } from 'shared/config/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import cls from './Portal.module.scss';

interface PortalProps {
    children?: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props:PortalProps) => {
    const {
        children,
        element = document.body, // значение по умолчанию для телепортации,
    } = props;

    return createPortal(children, element);
};
