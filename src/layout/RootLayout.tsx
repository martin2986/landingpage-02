import { FC, ReactNode } from "react";
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
