/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Preloading from "../components/PreLoading";

const Login = lazy(() => import("../pages/Login"));
const Pedidos = lazy(() => import("../pages/Pedidos"));

const ProtectedRoute = ({ element, isPrivate, path }) => {
  return element;
};

export default function Rotas() {
  return (
    <Suspense fallback={<Preloading />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </Suspense>
  );
}
