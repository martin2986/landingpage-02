import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Buttons } from "@/UI/Buttons";
import Inputs from "@/components/Inputs";
import AuthLayout from "@/layout/AuthLayout";
import Notification from "@/UI/Notification";
import axios from "axios";
const schema = z.object({
  username: z.string(),
  password: z.string().min(6),
});
type formFields = z.infer<typeof schema>;
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    defaultValues: {
      password: "",
      username: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<formFields> = async (data) => {
    try {
      const response = await axios.post("/api/auth/signin", data);
      console.log(response.data);
      reset();
      navigate("/");
    } catch (err: any) {
      setError("root", {
        message:
          err?.response?.data?.message || "An error occurred during login.",
      });
    }
  };

  return (
    <AuthLayout AUTH_TITLE="Sign In">
      {errors.root && (
        <Notification message={errors.root.message} type="error" />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs
          name="username"
          register={register}
          label="username"
          error={errors?.username?.message}
          type="text"
        />
        <Inputs
          name="password"
          register={register}
          label="Password"
          error={errors?.password?.message}
          type="password"
        />

        <Buttons className="w-full mt-5 " disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Log In"}
        </Buttons>
        <p className="uppercase my-1 text-xs text-center ">or</p>
        <div className="flex flex-row items-center justify-between text-sm mt-6">
          <Link to="/register" className="text-black underline">
            Sign Up
          </Link>
          <Link
            to="/"
            className="font-semibold text-indigo-600 hover:text-indigo-500 hover:scale-105"
          >
            Forgot password?
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
