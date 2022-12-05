import React, { useLayoutEffect } from "react";
import styled from "styled-components";

const StyledMessageBox = styled.div`
  background: white;
  height: 400px;
  width: 400px;
  color: black;
  font-size: 16px;
  font-weight: 900;
  overflow-y: scroll;
`;

const ALL_MESSAGES = [
  `Leia: Aren't you a little short to be a stormtrooper?`,
  `Luke: What? Oh... the uniform. I'm Luke Skywalker. I'm here to rescue you.`,
  `Leia: You're who?`,
  `Luke: I'm here to rescue you. I've got your R2 unit. I'm here with Ben Kenobi.`,
  `Leia: Ben Kenobi is here! Where is he?`,
  `Luke: Come on!`,
  `Luke: Will you forget it? I already tried it. It's magnetically sealed!`,
  `Leia: Put that thing away! You're going to get us all killed.`,
  `Han: Absolutely, Your Worship. Look, I had everything under control until you led us down here. You know, it's not going to take them long to figure out what happened to us.`,
  `Leia: It could be worse...`,
  `Han: It's worse.`,
  `Luke: There's something alive in here!`,
  `Han: That's your imagination.`,
  `Luke: Something just moves past my leg! Look! Did you see that?`,
  `Han: What?`,
  `Luke: Help!`,
  `Han: Luke! Luke! Luke!`,
  `Leia: Luke!`,
  `Leia: Luke, Luke, grab a hold of this.`,
  `Luke: Blast it, will you! My gun's jammed.`,
  `Han: Where?`,
  `Luke: Anywhere! Oh!!`,
  `Han: Luke! Luke!`,
  `Leia: Grab him!`,
  `Leia: What happened?`,
  `Luke: I don't know, it just let go of me and disappeared...`,
  `Han: I've got a very bad feeling about this.`,
  `Luke: The walls are moving!`,
  `Leia: Don't just stand there. Try to brace it with something.`,
  `Luke: Wait a minute!`,
  `Luke: Threepio! Come in Threepio! Threepio! Where could he be?`,
].map((m, i) => ({
  id: i,
  author: m.split(": ")[0],
  content: m.split(": ")[1],
}));

type Messages = { id: number; author: string; content: string };

const ListMessages = ({ messages }: { messages: Messages[] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });
  return (
    <StyledMessageBox ref={containerRef} role="log">
      {messages.map((message: Messages, index: number, array: any[]) => (
        <div key={message.id}>
          <strong>{message.author}</strong>: <span>{message.content}</span>
          {array.length - 1 === index ? null : <hr />}
        </div>
      ))}
    </StyledMessageBox>
  );
};

const ScrollBox = () => {
  const [messages, setMessages] = React.useState<Messages[]>(
    ALL_MESSAGES.slice(0, 3)
  );
  const addMessage = () =>
    messages.length < ALL_MESSAGES.length
      ? setMessages(ALL_MESSAGES.slice(0, messages.length + 1))
      : null;
  return (
    <div>
      <ListMessages messages={messages} />
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
};

export default ScrollBox;
