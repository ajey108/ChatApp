import { useEffect, useRef, useCallback } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	const scrollToLastMessage = useCallback(() => {
		if (lastMessageRef.current) {
			lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	useEffect(() => {
		scrollToLastMessage();
	}, [messages, scrollToLastMessage]);

	return (
		<div className="px-4 flex-1 overflow-auto">
			{!loading &&
				messages.length > 0 &&
				messages.map((message, index) => {
					const isLastMessage = index === messages.length - 1;
					return (
						<div key={message._id} ref={isLastMessage ? lastMessageRef : null}>
							<Message message={message} />
						</div>
					);
				})}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

			{!loading && messages.length === 0 && (
				<p className="text-center">Send a message to start the conversation</p>
			)}
		</div>
	);
};

export default Messages;
