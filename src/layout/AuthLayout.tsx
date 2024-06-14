import { FC } from "react";
import img from "@/assets/side.webp";
type AuthLayoutProps = {
  children: React.ReactNode;
  AUTH_TITLE: "Sign In" | "Sign Up";
};

const AuthLayout: FC<AuthLayoutProps> = ({ children, AUTH_TITLE = "" }) => {
  return (
    <div className=" min-h-screen bg-transparent flex flex-row ">
      <div className="hidden md:block md:flex-1">
        <img src={img} alt="" loading="lazy" className="h-full object-cover" />
      </div>
      <div className="flex w-full md:flex-1 bg-gray-100 min-h-full flex-col justify-center px-6 py-2 lg:px-2">
        <div className="md:mt-5 pb-10 mx-auto w-full sm:max-w-sm  p-3 rounded-md md:w-72">
          <h2 className="my-2 md:my-5 text-center text-3xl font-semibold leading-9 tracking-tight text-gray-900">
            {AUTH_TITLE}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
