import { Link } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { Buttons } from "@/UI/Buttons";

function ProfilePage() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="container mx-auto mt-5">
      <div className="">
        <div className="">
          <div className="flex flex-row items-center justify-between ">
            <h1 className="mb-5">User Information</h1>
            <Link to="/profile/update">
              <Buttons>Update Profile</Buttons>
            </Link>
          </div>
          <div className="flex flex-col text-sm">
            <span className="inline-flex gap-3 mb-3">
              Avatar:
              <img src={user.profilePhoto || "noavatar.jpg"} alt="" />
            </span>
            <span className="mb-3">
              Username: <b>{user.username}</b>
            </span>
            <span className="mb-3">
              E-mail: <b>{user.email}</b>
            </span>
            <Buttons size="sm" className="w-fit my-5">
              Logout
            </Buttons>
          </div>
          <div className="flex items-center justify-between">
            <h1>My List</h1>
            <Link to="/profile/new-post">
              <Buttons>Create New Post</Buttons>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
