import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SendHorizontal } from "lucide-react";
import { useEditConversationMutation } from "@/features/conversations/conversationsAPI";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Options = ({ info }) => {
  const [message, setMessage] = useState("");

  const [editConversation, { isSuccess }] = useEditConversationMutation();

  useEffect(() => {
    if (isSuccess) {
      setMessage("");
    }
  }, [isSuccess]);

  const { user: loggedInUser } = useSelector((state) => state.auth);
  console.log(info);
  const participantUser =
    info.receiver.email !== loggedInUser.email ? info.receiver : info.sender;

  const handleSubmit = (e) => {
    e.preventDefault();

    // add conversation
    editConversation({
      id: info?.conversationId,
      sender: loggedInUser?.email,
      data: {
        participants: `${loggedInUser.email}-${participantUser.email}`,
        users: [loggedInUser, participantUser],
        message,
        timestamp: new Date().getTime(),
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 w-full p-3 border-t border-gray-300"
    >
      <Input
        name="message"
        placeholder="Message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="grow"
        inputClass="bg-gray-100 border-none rounded-full"
      />
      <Button
        type="submit"
        size="auto"
        variant="custom"
        icon={SendHorizontal}
        iconSize={22}
        className="bg-transparent text-foreground hover:text-primary-900"
      />
    </form>
  );
};

export default Options;
