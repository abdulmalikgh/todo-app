import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
import storage from "../helpers/Storage";

export default function ProtectectRoute({component: Component, ...restOfProps}) {
    const isAuthenticated = storage.getSavedState('isAuthenticated')
   return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
