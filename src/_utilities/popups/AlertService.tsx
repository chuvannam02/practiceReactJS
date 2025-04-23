import React, { createContext, useContext } from 'react';
import { notification } from 'antd';
import type { ArgsProps } from 'antd/es/notification/interface';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';
export interface AlertOptions {
    message: string;
    description?: string;
    duration?: number;
    showProgress?: boolean;
}

export interface AlertContextType {
    open: (type: NotificationType, options: AlertOptions) => void;
    success: (message: string, description?: string, opts?: Partial<Omit<AlertOptions, 'message' | 'description'>>) => void;
    error: (message: string, description?: string, opts?: Partial<Omit<AlertOptions, 'message' | 'description'>>) => void;
    warning: (message: string, description?: string, opts?: Partial<Omit<AlertOptions, 'message' | 'description'>>) => void;
    info: (message: string, description?: string, opts?: Partial<Omit<AlertOptions, 'message' | 'description'>>) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // no explicit types for api and contextHolder to avoid TS errors
    const [api, contextHolder] = notification.useNotification();

    const open = (
        type: NotificationType,
        { message, description, duration = 2, showProgress = true }: AlertOptions
    ) => {
        api.open({
            type,
            message,
            description,
            placement: 'topRight',
            duration,
            showProgress,
        } as ArgsProps);
    };

    const success = (message: string, description?: string, opts?: Partial<Omit<AlertOptions, 'message' | 'description'>>) =>
        open('success', { message, description, ...opts });
    const error = (message: string, description?: string, opts?: Partial<Omit<AlertOptions, 'message' | 'description'>>) =>
        open('error', { message, description, ...opts });
    const warning = (message: string, description?: string, opts?: Partial<Omit<AlertOptions, 'message' | 'description'>>) =>
        open('warning', { message, description, ...opts });
    const info = (message: string, description?: string, opts?: Partial<Omit<AlertOptions, 'message' | 'description'>>) =>
        open('info', { message, description, ...opts });

    return (
        <>
            {contextHolder}
        <AlertContext.Provider value={{ open, success, error, warning, info }}>
            {children}
            </AlertContext.Provider>
    </>
);
};

export const useAlert = (): AlertContextType => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error('useAlert must be used within an AlertProvider');
    }
    return context;
};
