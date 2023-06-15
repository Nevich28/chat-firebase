import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privatRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/const';
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../index'

export const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);
    return user ? (
        <Routes>
            {privatRoutes.map(({ path, Component }, i) => (
                <Route key={i} path={path} element={Component} exact={true} />
            ))}
            <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({ path, Component }, i) => (
                <Route key={i} path={path} element={Component} exact={true} />
            ))}
            <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
        </Routes>
    );
};
