import { List, ListItem, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavigationBar } from "../components/common/NavigationBar";
import { getDocs, getFirestore, collection, where, query } from "firebase/firestore"
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/user/userSlice";
import { Message, messageConverter } from "../models/message";
import { useFindUsersQuery, User } from "../generated-types";

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[] | null>(null)
  const [matches, setMatches] = useState<User[] | null>(null)
  const { user } = useAppSelector(selectUser);
  const db = getFirestore();
  const findUsersQuery = useFindUsersQuery();

  const getMatches = async () => {
    if (!messages) return;
    const matchIds = messages?.map(v => v.sentBy);

    const allUsers = findUsersQuery.data?.findUsers
    const matchedUsers = allUsers?.items.filter(u => matchIds.includes(u?._id ?? ""))
    setMatches(matchedUsers as User[])
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

    const messages = [...sentSnapshot.docs.map((v) => v.data()), ...receivedSnapshot.docs.map((v) => v.data())].sort(d => d.timestamp.seconds);
    console.log(messages)
    setMessages(messages)
  }

  const onLoad = async () => {
    await getMessages()
    await getMatches()
  }

  useEffect(() => {
    onLoad()
  }, [])

  return (
    <>
      <div className="page">
        <h2 className="section-header">Messages</h2>
        <List>
          <ListItem>
            <ListItemText
              primary={"Neo"}
              secondary={"Yeah, we can meet up tomorrow!"}
            />
          </ListItem>
        </List>
      </div>
      <NavigationBar />
    </>
  );
};
