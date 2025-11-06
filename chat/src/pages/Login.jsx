import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/features/auth/authAPI";
import logoImage from "@/assets/images/lws-logo-light.svg";
import Error from "@/components/ui/Error";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Login = () => {
  const [error, setError] = useState("");
  const empty = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(empty);
  const [login, { data, isLoading, error: responseError }] = useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      navigate("/inbox");
    }
  }, [data, responseError, navigate]);

  const handleChange = (e) => {
    const payload = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    login(formData);
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="min-h-full flex-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <header>
            <Link to="/">
              <img
                className="mx-auto h-12 w-auto"
                src={logoImage}
                alt="Learn with sumit"
              />
            </Link>
            <Heading
              level="2"
              className="text-foreground text-center mt-6"
              text="Sign in to your account"
            />
          </header>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                inputClass="rounded-b-none"
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                inputClass="rounded-t-none"
              />
            </div>

            <div className="flex items-center justify-end">
              <Link
                to="/register"
                className="text-sm font-medium text-violet-600 hover:text-violet-500"
              >
                Register
              </Link>
            </div>

            <Button
              disabled={isLoading}
              id="submit"
              type="submit"
              size="md"
              variant="primary"
              text="Sign in"
              className="w-full justify-center font-medium"
            />

            {error !== "" && <Error children={error} />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
