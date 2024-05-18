import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import "./profileUpdate.scss";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import Notification from "@/UI/Notification";
import axios from "axios";
import { z } from "zod";
import { Buttons } from "@/UI/Buttons";
const schema = z.object({
  username: z.string(),
  email: z.string(),
  profilePhoto: z.string(),
  password: z.string().min(6),
});
type formFields = z.infer<typeof schema>;
function ProfileUpdatePage() {
  const { user } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    defaultValues: {
      email: "",
      username: "",
      profilePhoto: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<formFields> = async (data) => {
    try {
      const response = await axios.post(`/api/users/${user.id}`, data);
      console.log(response.data);
      navigate("/profile");
    } catch (err: any) {
      setError("root", {
        message:
          err?.response?.data?.message || "An error occurred during login.",
      });
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              {...register("username")}
              type="text"
              defaultValue={user.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              {...register("email")}
              type="email"
              defaultValue={user.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" {...register("password")} type="password" />
          </div>
          <Buttons disabled={isSubmitting}>
            {isSubmitting ? "Loading" : "Update"}
          </Buttons>
          {errors.root && (
            <Notification message={errors.root.message} type="error" />
          )}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={user.profilePhoto || "/noavatar.jpg"}
          alt=""
          className="avatar"
        />
        {/* <UploadWidget
          uwConfig={{
            cloudName: "lamadev",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        /> */}
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
