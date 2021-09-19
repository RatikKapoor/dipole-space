interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

export class Message {
  public message: string;
  public sentBy: string;
  public sentTo: string;
  public timestamp: Timestamp;

  constructor(
    message: string,
    sentBy: string,
    sentTo: string,
    timestamp: Timestamp
  ) {
    this.message = message;
    this.sentBy = sentBy;
    this.sentTo = sentTo;
    this.timestamp = timestamp;
  }
}

/* eslint-disable */

export const messageConverter = {
  toFirestore: (messageObject: Message) => {
    return {
      message: messageObject.message,
      sentBy: messageObject.sentBy,
      sentTo: messageObject.sentTo,
      timestamp: messageObject.timestamp,
    };
  },
  fromFirestore: (snapshot: any, options: any) => {
    const data: Message = snapshot.data(options);
    return new Message(data.message, data.sentBy, data.sentTo, data.timestamp);
  },
};
