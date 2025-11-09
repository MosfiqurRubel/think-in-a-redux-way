import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "@/features/users/usersAPI";
import {
  conversationsAPI,
  useAddConversationMutation,
  useEditConversationMutation,
} from "@/features/conversations/conversationsAPI";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Error from "@/components/ui/Error";
import isValidEmail from "@/utils/isValidEmail";

const Modal = ({ open, control }) => {
  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [userCheck, setUserCheck] = useState(false);
  const { user: loggedInUser } = useSelector((state) => state.auth) || {};
  const { email: myEmail } = loggedInUser || {};
  const [responseError, setResponseError] = useState("");
  const [conversation, setConversation] = useState(undefined);

  const { data: participant } = useGetUserQuery(to, {
    skip: !userCheck,
  });

  const [addConversation, { isSuccess: isAddConversationSuccess }] =
    useAddConversationMutation();
  const [editConversation, { isSuccess: isEditConversationSuccess }] =
    useEditConversationMutation();

  useEffect(() => {
    if (participant?.length > 0 && participant[0].email !== myEmail) {
      // check conversation existance
      dispatch(
        conversationsAPI.endpoints.getConversation.initiate({
          userEmail: myEmail,
          participantEmail: to,
        })
      )
        .unwrap()
        .then((data) => {
          setConversation(data);
        })
        .catch((err) => {
          setResponseError("There was a problem!");
        });
    }
  }, [participant, dispatch, myEmail, to]);

  // listen conversation add/edit success
  useEffect(() => {
    if (isAddConversationSuccess || isEditConversationSuccess) {
      control();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddConversationSuccess, isEditConversationSuccess]);

  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const doSearch = (value) => {
    if (isValidEmail(value)) {
      // check user API
      setUserCheck(true);
      setTo(value);
    }
  };

  const handleSearch = debounceHandler(doSearch, 500);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (conversation?.length > 0) {
      // edit conversation
      editConversation({
        id: conversation[0].id,
        data: {
          participants: `${myEmail}-${participant[0].email}`,
          users: [loggedInUser, participant[0]],
          message,
          timestamp: new Date().getTime(),
        },
      });
    } else if (conversation?.length === 0) {
      // add conversation
      addConversation({
        participants: `${myEmail}-${participant[0].email}`,
        users: [loggedInUser, participant[0]],
        message,
        timestamp: new Date().getTime(),
      });
    }
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
              disabled={
                conversation === undefined ||
                (participant?.length > 0 && participant[0].email === myEmail)
              }
              type="submit"
              size="md"
              variant="primary"
              text="Send Message"
              className="w-full justify-center font-medium"
            />

            {participant?.length === 0 && (
              <Error children="This user doesn't exit!" />
            )}
            {participant?.length > 0 && participant[0].email === myEmail && (
              <Error children="You can't send message to yourself!" />
            )}
            {responseError && <Error children={responseError} />}
          </form>
        </div>
      </>
    )
  );
};

export default Modal;
