import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "@/layout/RootLayout";
import Register from "@/pages/Register";
import ProtectedRoute from "./ProtectedRoute";
const NotFound = lazy(() => import("@/pages/NotFound"));
const HomePage = lazy(() => import("@/pages/HomePage"));
const Login = lazy(() => import("@/pages/Login"));
const Contact = lazy(() => import("@/pages/Contact"));
const Profile = lazy(() => import("@/pages/profile/Profile"));
const NewPost = lazy(() => import("@/features/userProfile/NewPost"));
const Listing = lazy(() => import("@/pages/Listing"));
const ListingDetailPage = lazy(() => import("@/pages/ListingDetailPage"));
const ProfileUpdate = lazy(
  () => import("@/features/userProfile/profileUpdate")
);

const AppRouter = () => {
  return (
    <RootLayout>
      <Routes>
        <Route element={<Login />} path="login" />
        <Route element={<Register />} path="register" />
        <Route element={<HomePage />} path="/" />
        <Route element={<Contact />} path="contact" />
        <Route element={<Contact />} path="about" />
        <Route element={<Listing />} path="listing" />
        <Route element={<ListingDetailPage />} path="listing/:id" />
        <Route element={<ProtectedRoute redirectPath="/" />}>
          <Route element={<Profile />} path="profile" />
          <Route element={<ProfileUpdate />} path="profile/update" />
          <Route element={<NewPost />} path="profile/new-post" />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RootLayout>
  );
};

export default AppRouter;
