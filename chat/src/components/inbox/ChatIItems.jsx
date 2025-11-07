import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "@/features/conversations/conversationsAPI";
import moment from "moment";
import gravatarUrl from "gravatar-url";
import ChatItem from "./ChatItem";
import BookLoader from "@/components/ui/loaders/BookLoader";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import getPartnerInfo from "@/utils/getPartnerInfo";

const ChatIItems = () => {
  const { user } = useSelector((state) => state.auth);
  const { email } = user || {};
  const {
    data: conversations,
    isLoading,
    isError,
    error,
  } = useGetConversationsQuery(email);

  // decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <li>
        <BookLoader />
      </li>
    );
  } else if (!isLoading && isError) {
    content = (
      <li>
        <Error children={error?.data} />
      </li>
    );
  } else if (!isLoading && !isError && conversations?.length === 0) {
    content = (
      <li>
        <Loading loadingText="No conversations found!" />
      </li>
    );
  } else if (!isLoading && !isError && conversations?.length > 0) {
    content = conversations.map((conversation) => {
      const { id, message, timestamp } = conversation;
      const { name, email: partnerEmail } = getPartnerInfo(
        conversation.users,
        email
      );

      return (
        <li key={id}>
          <Link to={`/inbox/${id}`}>
            <ChatItem
              avatar={gravatarUrl(partnerEmail, { size: 80 })}
              name={name}
              lastMessage={message}
              lastTime={moment(timestamp).fromNow()}
            />
          </Link>
        </li>
      );
    });
  }

  return <ul>{content}</ul>;
};

export default ChatIItems;
