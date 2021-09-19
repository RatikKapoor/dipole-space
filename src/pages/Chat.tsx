import { List, ListItem, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavigationBar } from "../components/common/NavigationBar";
import { getDocs, getFirestore, collection, where, query, onSnapshot, doc } from "firebase/firestore"
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/user/userSlice";
import { Message, messageConverter } from "../models/message";
import { useFindMatchNodesQuery, useFindUsersQuery, User } from "../generated-types";
import { useHistory } from "react-router";

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[] | null>(null)
  const [matches, setMatches] = useState<User[] | null>(null)
  const { user } = useAppSelector(selectUser);
  const db = getFirestore();
  const { data } = useFindMatchNodesQuery();
  const findUsersQuery = useFindUsersQuery()
  const history = useHistory();

  const getMatches = async () => {
    console.log("Fetching matches", data)
    const myMatches = data?.findMatchNodes.items
      .filter(m => m?.user1 === user?._id || m?.user2 === user?._id)
      .map(v => v?.user1 === user?._id ? v?.user2 : v?.user1)

    console.log("My matches", myMatches)

    if (myMatches === undefined) return;

    const allUsers = findUsersQuery.data?.findUsers
    const matchedUsers = allUsers?.items.filter(u => myMatches.includes(u?._id ?? ""))
    console.log("Matched users", matchedUsers as User[])
    setMatches(matchedUsers as User[])
    console.log(matches)
  }

  const getMessages = async (): Promise<void> => {
    const sentSnapshot = await getDocs(query(
      collection(db, "messages").withConverter(messageConverter),
      where("sentBy", "==", user?._id)
    ));
    const receivedSnapshot = await getDocs(query(
      collection(db, "messages").withConverter(messageConverter),
      where("sentTo", "==", user?._id)
    ))

    const unsortedMessages = [...sentSnapshot.docs.map((v) => v.data()), ...receivedSnapshot.docs.map((v) => v.data())]
    const sortedMessages = unsortedMessages.sort(((a, b) => a.timestamp.seconds - b.timestamp.seconds));
    console.log(sortedMessages)
    setMessages(sortedMessages)
  }

  // useEffect(() => {
  //   getMessages()
  // }, [])
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages").withConverter(messageConverter), (message) => {
      console.log("New message", message)
      getMessages()
    })
    return () => {
      unsub()
    }
  }, [])

  useEffect(() => {
    getMatches()
  }, [data])

  return (
    <>
      <div className="page">
        <h2 className="section-header">Messages</h2>
        <List>
          {matches && matches.map((m, k) =>
            <ListItem key={k} onClick={() => history.push(`/chat-session/${m._id}`)}>
              <ListItemText
                primary={m.firstName}
                secondary={messages?.find((message => message.sentBy === m._id && message.sentTo === user?._id) || (message => message.sentBy === user?._id && message.sentTo === m._id))?.message ?? 'No messages'}
              />
            </ListItem>
          )}
        </List>
      </div>
      <NavigationBar />
    </>
  );
};
