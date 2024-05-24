import { Link } from "react-router-dom";
import "./profile.scss";
import { useAppSelector } from "@/store/hooks";
import { Buttons } from "@/UI/Buttons";

function ProfilePage() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <Buttons>Update Profile</Buttons>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={user.profilePhoto || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{user.username}</b>
            </span>
            <span>
              E-mail: <b>{user.email}</b>
            </span>
            <Buttons variant="outline" className="w-24">
              Logout
            </Buttons>
          </div>
          <div className="title">
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
