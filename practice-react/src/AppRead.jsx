import React from "react";

export default function AppRead() {
  const [msg, setMsg] = React.useState(["a", "b", "c"]);
  return (
    <main>{msg.length && <h1>You have {msg.length} unread messages!</h1>}</main>
  );
}
