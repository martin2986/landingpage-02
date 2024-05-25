import { Link } from "react-router-dom";
import "./profile.scss";
import { useAppSelector } from "@/store/hooks";
import { Buttons } from "@/UI/Buttons";

function ProfilePage() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="flex flex-row items-center justify-between ">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <Buttons>Update Profile</Buttons>
            </Link>
          </div>
          <div className="flex flex-col text-sm">
            <span className="inline-flex gap-3">
              Avatar:
              <img src={user.profilePhoto || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{user.username}</b>
            </span>
            <span>
              E-mail: <b>{user.email}</b>
            </span>
            <Buttons size="sm" className="w-10 text-white">
              Logout
            </Buttons>
          </div>
          <div className="flex items-center justify-between">
            <h1>My List</h1>
            <Link to="/profile/update">
              <Buttons>Create New Post</Buttons>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
