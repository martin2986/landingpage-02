import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "@/layout/RootLayout";
import Register from "@/pages/Register";
const HomePage = lazy(() => import("@/pages/HomePage"));
const Login = lazy(() => import("@/pages/Login"));
const Contact = lazy(() => import("@/pages/Contact"));

const AppRouter = () => {
  return (
    <RootLayout>
      <Routes>
        <Route element={<Login />} path="login" />
        <Route element={<Register />} path="register" />
        <Route element={<HomePage />} path="/" />
        <Route element={<Contact />} path="contact" />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </RootLayout>
  );
};

export default AppRouter;
