import { Link } from "react-router-dom";
import logoImage from "@/assets/images/lws-logo-light.svg";
import Error from "@/components/ui/Error";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Login = () => {
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

          <form className="mt-8 space-y-6" action="#" method="POST">
            {/* <input type="hidden" name="remember" value="true" /> */}
            <div className="rounded-md shadow-sm -space-y-px">
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                required
                inputClass="rounded-b-none"
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
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
              id="submit"
              type="submit"
              size="md"
              variant="primary"
              text="Sign in"
              className="w-full justify-center font-medium"
            />

            <Error message="There was an error" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
