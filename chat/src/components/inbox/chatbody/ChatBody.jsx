import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "@/features/messages/messagesAPI";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";
import BookLoader from "@/components/ui/loaders/BookLoader";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";

const ChatBody = () => {
  const { id } = useParams();
  const { data: messages, isLoading, isError, error } = useGetMessagesQuery(id);

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <BookLoader />;
  } else if (!isLoading && isError) {
    content = <Error children={error?.data} />;
  } else if (!isLoading && !isError && messages?.length === 0) {
    content = <Loading loadingText="No messages found!" className="p-4" />;
  } else if (!isLoading && !isError && messages?.length > 0) {
    content = (
      <>
        <ChatHead message={messages[0]} />
        <Messages messages={messages} />
        <Options />
      </>
    );
  }

  return (
    <div className="w-full lg:col-span-2 lg:block">
      <div className="w-full grid conversation-row-grid">
        {content}
        {/* <Blank /> */}
      </div>
    </div>
  );
};

export default ChatBody;
