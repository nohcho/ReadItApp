import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '213' };
        expect(loginReducer(
state as LoginSchema,
loginActions.setUsername('Muhammad'),
        )).toBe({ username: 'Muhammad' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '213' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'),
        )).toBe({ password: '123' });
    });
});
