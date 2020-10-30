import React from "react";
import Accordion from ".//components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a Frontend Framework!",
  },
  {
    title: "Why use React?",
    content: "React is cool, that's why!",
  },
  {
    title: "How do you use React?",
    content: "You use React by using Components!",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
