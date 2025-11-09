import { useState } from "react";
import { useGetUserQuery } from "@/features/users/usersAPI";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Error from "@/components/ui/Error";
import isValidEmail from "@/utils/isValidEmail";

const Modal = ({ open, control }) => {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [userCheck, setUserCheck] = useState(false);

  const { data: participant } = useGetUserQuery(to, {
    skip: !userCheck,
  });

  const debounce = (func, delay) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const searchQuery = (value) => {
    if (isValidEmail(value)) {
      // check user API
      setUserCheck(true);
      console.log("valid");
      setTo(value);
    }
  };

  const handleSearch = debounce(searchQuery, 500);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <Heading
            level="2"
            align="center"
            className="text-foreground"
            text="Send message"
          />
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md -space-y-px">
              <Input
                type="email"
                name="to"
                placeholder="Send to"
                onChange={(e) => handleSearch(e.target.value)}
                required
                inputClass="rounded-b-none"
              />

              <Textarea
                name="message"
                placeholder="Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                textareaClass="rounded-t-none"
              />
            </div>

            <Button
              type="submit"
              size="md"
              variant="primary"
              text="Send Message"
              className="w-full justify-center font-medium"
            />

            {participant?.length === 0 && (
              <Error children="This user doesn't exit!" />
            )}
          </form>
        </div>
      </>
    )
  );
};

export default Modal;
