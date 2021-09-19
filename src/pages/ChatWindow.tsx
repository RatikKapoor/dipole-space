import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ArrowBack, ChevronRight } from "@mui/icons-material";
import { getFirestore, getDocs, query, collection, where } from "firebase/firestore";
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/user/userSlice";
import { User, useGetUserQuery } from "../generated-types";
import { Message, messageConverter } from "../models/message";

export const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[] | null>(null)
  // const [match, setMatch] = useState<User | null>(null)
  const { user } = useAppSelector(selectUser);
  const db = getFirestore();
  const { id } = useParams<{ id: string }>()

  const getMatch = async () => {
    if (!messages) return;

    const userQuery = useGetUserQuery({ variables: { id: id } })
    const matchedUser = userQuery.data?.getUser
    // setMatch(matchedUser as User)
  }

  const getMessages = async (): Promise<void> => {
    const sentSnapshot = await getDocs(query(
      collection(db, "messages").withConverter(messageConverter),
      where("sentBy", "==", user?._id),
      where("sentTo", "==", id)
    ));
    const receivedSnapshot = await getDocs(query(
      collection(db, "messages").withConverter(messageConverter),
      where("sentTo", "==", user?._id),
      where("sentBy", "==", id)
    ))

    const messages = [...sentSnapshot.docs.map((v) => v.data()), ...receivedSnapshot.docs.map((v) => v.data())].sort(d => d.timestamp.seconds);
    console.log(messages)
    setMessages(messages)
  }

  const onLoad = async () => {
    await getMessages()
    await getMatch()
  }

  useEffect(() => {
    onLoad()
  }, [])


  return (
    <>
      <div className="page message-window">
        <div className="message-header">
          <div className="back-button">
            <Link to="/chat">
              <ArrowBack />
            </Link>
          </div>
          <h2>Carter</h2>
          <a className="profile-link">
            <span>View Profile</span>
            <ChevronRight />
          </a>
        </div>
        <div className="message-compose">
          <div className="compose-container">
            <div className="take-picture">

            </div>
            <div>

            </div>
            <div className="upload-image">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
