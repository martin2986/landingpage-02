import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Buttons } from "@/UI/Buttons";
import Inputs from "@/components/Inputs";
import AuthLayout from "@/layout/AuthLayout";
import Notification from "@/UI/Notification";
import { useDisPatch } from "@/store/hooks";
import { authAction } from "@/store/authSlice";
import { appApi } from "@/util/service";
const schema = z.object({
  username: z.string(),
  password: z.string().min(6),
});
type formFields = z.infer<typeof schema>;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDisPatch();
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
      const response = await appApi.post("/auth/signin", data);
      dispatch(authAction.login(response.data));
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
        <Inputs>
          <Inputs.Label label="Username" htmlFor="username" />
          <Inputs.Input
            name="username"
            id="username"
            register={register}
            placeholder="username"
            error={errors?.username?.message}
            type="text"
          />
          <Inputs.Label label="Password" htmlFor="password" />
          <Inputs.Input
            name="password"
            id="password"
            register={register}
            placeholder="Password"
            error={errors?.password?.message}
            type="password"
          />
        </Inputs>
        <div className="flex flex-row items-center justify-end text-sm">
          {/* <Link to="/" className="text-black text-xs">
            Remember me
          </Link> */}
          <Link
            to="/"
            className="font-semibold text-indigo-600 hover:text-indigo-500 hover:scale-105 text-xs"
          >
            Forgot your password?
          </Link>
        </div>
        <Buttons
          className={`w-full mt-5  ${isSubmitting ? "bg-indigo-400" : ""} `}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Log In"}
        </Buttons>
      </form>
      <div className="inline-flex gap-1 items-center w-full mt-5">
        <p className="text-xs">Don't have an account?</p>
        <Link to="/register" className="text-xs text-indigo-500 font-semibold">
          Sign up
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
