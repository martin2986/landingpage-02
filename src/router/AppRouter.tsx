import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "@/layout/RootLayout";
import Register from "@/pages/Register";
import ProtectedRoute from "./ProtectedRoute";
const HomePage = lazy(() => import("@/pages/HomePage"));
const Login = lazy(() => import("@/pages/Login"));
const Contact = lazy(() => import("@/pages/Contact"));
const Profile = lazy(() => import("@/pages/profile/Profile"));

const AppRouter = () => {
  return (
    <RootLayout>
      <Routes>
        <Route element={<Login />} path="login" />
        <Route element={<Register />} path="register" />
        <Route element={<HomePage />} path="/" />
        <Route element={<Contact />} path="contact" />
        <Route element={<ProtectedRoute redirectPath="/" />}>
          <Route element={<Profile />} path="profile" />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </RootLayout>
  );
};

export default AppRouter;
