import { FC } from "react";

type Props = {
  icon: any;
};

const FooterIcon: FC<Props> = ({ icon = "" }) => {
  return (
    <div className=" bg-indigo-700 border border-indigo-700 w-8 p-2 rounded cursor-pointer hover:bg-transparent hover:border-indigo-700">
      {icon}
    </div>
  );
};

export default FooterIcon;
