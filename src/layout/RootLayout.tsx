import { FC, ReactNode } from "react";
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
