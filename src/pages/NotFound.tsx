import { FC } from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Buttons } from "@/UI/Buttons";
type NotFoundProps = {
  entity?: string;
};

const NotFound: FC<NotFoundProps> = ({ entity = " " }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center text-black gap-5 h-screen w-screen">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">Error_404</h3>
        <MdCancel
          className="mx-auto"
          style={{
            fontSize: "5rem",
            color: "#D2042D",
            marginBottom: "1rem",
          }}
        />
        <p>Sorry the Page you requested does not exist</p>
      </div>
      <Buttons onClick={() => navigate(`/${entity?.toLowerCase()}`)}>
        Back
      </Buttons>
    </div>
  );
};

export default NotFound;
