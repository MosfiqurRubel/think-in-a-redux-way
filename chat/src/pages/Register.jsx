import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "@/features/auth/authAPI";
import logoImage from "@/assets/images/lws-logo-light.svg";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import Error from "@/components/ui/Error";

const Register = () => {
  const [error, setError] = useState("");
  const empty = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  };
  const [formData, setFormData] = useState(empty);

  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();

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
    const { name, value, type, checked } = e.target;

    const payload = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };
    setFormData(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const payload = {
      ...formData,
      agreed: Boolean(formData.agreed),
    };

    setError("");

    if (formData.confirmPassword !== formData.password) {
      setError("Passwords do not match!");
    } else {
      register(payload);
    }
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
              text="Create your account"
            />
          </header>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <Input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                inputClass="rounded-b-none"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                inputClass="rounded-none"
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                inputClass="rounded-none"
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                inputClass="rounded-t-none"
              />
            </div>

            <div className="flex items-center">
              <Checkbox
                name="agreed"
                id="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                required={true}
              />
              <Label
                htmlFor="agreed"
                text="Agreed with the terms and condition"
                className="ml-2 text-sm normal-case"
              />
            </div>

            <Button
              disabled={isLoading}
              id="submit"
              type="submit"
              size="md"
              variant="primary"
              text="Sign Up"
              className="w-full justify-center font-medium"
            />
          </form>
          {error !== "" && <Error children={error} />}
        </div>
      </div>
    </div>
  );
};

export default Register;
