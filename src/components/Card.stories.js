import React from "react";
import Card from "./Card";

export default {
  component: Card,
  title: "Component/Card",
};

const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});

DefaultCard.args = {
  cardData: {
    title: "Test title",
    text: "Test text to show in the body.",
  },
};
