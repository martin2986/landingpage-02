import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector, useDisPatch } from "@/store/hooks";
import Notification from "@/UI/Notification";
import { Buttons } from "@/UI/Buttons";
import Inputs from "@/components/Inputs";
import { appApi } from "@/util/service";
import { authAction } from "@/store/authSlice";
import UploadWidget from "@/components/UploadWidget";
const schema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});
type formFields = z.infer<typeof schema>;
function ProfileUpdatePage() {
  const { user } = useAppSelector((state) => state.auth);
  const [avatar, setAvatar] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDisPatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    defaultValues: {
      email: user.email,
      username: user.username,
      password: "",
    },
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<formFields> = async (data) => {
    const { email, username, password } = data;
    try {
      const response = await appApi.patch(`/user/update`, {
        email,
        username,
        password,
        profilePhoto: avatar[0],
      });
      dispatch(authAction.updateMe(response.data));
      navigate("/profile");
    } catch (err: any) {
      setError("root", {
        message:
          err?.response?.data?.message || "An error occurred during login.",
      });
    }
  };

  return (
    <div className="h-full">
      <h1>profile photo</h1>
      <div className="flex justify-center items-center h-32 border border-black my-5">
        <img
          src={avatar[0] || user.profilePhoto || "/noavatar.jpg"}
          alt=""
          className=" w-40 rounded-full"
        />
        <UploadWidget
          uwConfig={{
            cloudName: process.env.CLOUD_NAME,
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-64">
          <h1 className="text-center mb-5">Update Profile</h1>
          <Inputs label="Username" register={register} name="username" />
          <Inputs label="Email" register={register} name="email" />
          <Inputs label="Password" register={register} name="password" />

          <Buttons
            disabled={isSubmitting}
            className={`w-full mt-5  ${isSubmitting ? "bg-indigo-400" : ""} `}
          >
            {isSubmitting ? "Loading" : "Update"}
          </Buttons>
          {errors.root && (
            <Notification message={errors.root.message} type="error" />
          )}
        </form>
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
