import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import AuthLayout from "../layout/AuthLayout";
import Inputs from "../components/Inputs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Buttons } from "@/UI/Buttons";
import axios from "axios";
export const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type formFields = z.infer<typeof registerFormSchema>;

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<formFields> = async (data) => {
    try {
      const response = await axios.post("/api/auth/signup", data);
      console.log(response.data);
      reset();
      navigate("/");
    } catch (err: any) {
      setError("root", {
        message: err.response.data.message || "An error occurred during login.",
      });
    }
  };
  return (
    <AuthLayout AUTH_TITLE="Sign Up">
      {errors.root && (
        <div className="text-red-500 text-sm mb-4">{errors.root.message}</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs>
          <Inputs.Label label="Username" htmlFor="username" />
          <Inputs.Input
            name="username"
            id="username"
            type="text"
            register={register}
            placeholder="Username"
            error={errors?.username?.message}
          />
          <Inputs.Label label="Email" htmlFor="email" />
          <Inputs.Input
            name="email"
            id="email"
            placeholder="Email"
            type="email"
            register={register}
            error={errors?.email?.message}
          />
          <Inputs.Label label="Password" htmlFor="password" />
          <Inputs.Input
            name="password"
            id="password"
            placeholder="Password"
            type="password"
            register={register}
            error={errors?.password?.message}
          />
        </Inputs>

        <Buttons className="w-full mt-3" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Sign Up"}
        </Buttons>
      </form>
      <div className="inline-flex gap-1 items-center w-full mt-5">
        <p className="text-xs">Already have an account?</p>
        <Link to="/login" className="text-xs text-indigo-500 font-semibold">
          Sign in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Register;
