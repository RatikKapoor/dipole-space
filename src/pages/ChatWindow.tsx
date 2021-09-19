import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ArrowBack, ChevronRight } from "@mui/icons-material";
import { getFirestore, getDocs, query, collection, where, addDoc } from "firebase/firestore";
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/user/userSlice";
import { User, useGetUserQuery } from "../generated-types";
import { Message, messageConverter } from "../models/message";
import { Button, TextField } from "@mui/material";

export const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[] | null>(null)
  const [match, setMatch] = useState<User | null>(null)
  const [composeMessageText, setComposeMessageText] = useState<string>("")
  const { user } = useAppSelector(selectUser);
  const db = getFirestore();
  const { id } = useParams<{ id: string }>()
  const { data } = useGetUserQuery({ variables: { id: id } })

  const getMatch = async () => {
    const matchedUser = data?.getUser
    if (!matchedUser) return;
    setMatch(matchedUser as User)
    console.log(match)
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

    const messages = [...sentSnapshot.docs.map((v) => v.data()), ...receivedSnapshot.docs.map((v) => v.data())].sort(d => d.timestamp.seconds).reverse();
    console.log(messages)
    setMessages(messages)
  }

  const sendMessage = async (): Promise<void> => {
    if (user === undefined || user === null || match === null || match === undefined) return;
    const docRef = await addDoc(collection(db, "messages").withConverter(messageConverter), {
      message: composeMessageText,
      sentBy: user._id,
      sentTo: match._id,
      timestamp: { seconds: (new Date).getTime() / 1000, nanoseconds: 0 }
    })
  }

  useEffect(() => {
    getMessages()
  }, [])

  useEffect(() => {
    getMatch()
  }, [id, data])


  return (
    <>
      <div className="page message-window">
        <div className="message-header">
          <div className="back-button">
            <Link to="/chat">
              <ArrowBack />
            </Link>
          </div>
          <h2>{match?.firstName}</h2>
          <a className="profile-link">
            <span>View Profile</span>
            <ChevronRight />
          </a>
        </div>
        <div className="messages">
          {messages?.map((k, v) => <div className={`message-bubble ${k.sentBy === user?._id ? "message-sent" : "message-received"}`} key={v}><p className="message-text">{k.message}</p></div>)}
        </div>
        <div className="message-compose">
          <div className="compose-container">
            {/* <div className="take-picture">

            </div>
            <div>

            </div>
            <div className="upload-image">

            </div> */}
            <TextField value={composeMessageText} onChange={e => setComposeMessageText(e.target.value)} />

            <Button onClick={sendMessage}>Send</Button>
          </div>
        </div>
      </div>
    </>
  );
};
