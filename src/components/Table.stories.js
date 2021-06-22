import React from "react";
import Table from "./Table";

export default {
  title: "Component/Table",
  component: "Table",
};

const Template = (args) => <Table {...args} />;

export const BaseTable = Template.bind({});

BaseTable.args = {
  data: [
    {
      first: "Mark",
      last: "Sullivan",
      handle: "@arsw",
    },
    {
      first: "Jacob",
      last: "Atchison",
      handle: "@qars",
    },
    {
      first: "Steven",
      last: "Camel",
      handle: "@qqqqq",
    },
    {
      first: "Ahmad",
      last: "Kimbel",
      handle: "@asaf",
    },
    {
      first: "Olay",
      last: "Zens",
      handle: "@fats",
    },
    {
      first: "Stacey",
      last: "Maghrib",
      handle: "@mdo",
    },
    {
      first: "Jen",
      last: "Antario",
      handle: "@bird",
    },
    {
      first: "Phillip",
      last: "Hawk",
      handle: "@hawk",
    },
    {
      first: "Tracey",
      last: "Stone",
      handle: "@larry",
    },
    {
      first: "Ayesha",
      last: "Bilal",
      handle: "@achi",
    },
    {
      first: "Stone",
      last: "Maha",
      handle: "@maha",
    },
    {
      first: "Killian",
      last: "Niger",
      handle: "@tarht",
    },
    {
      first: "Otto",
      last: "Zonda",
      handle: "@fffw",
    },
    {
      first: "Liu",
      last: "Otoshi",
      handle: "@awar",
    },
    {
      first: "Zhen",
      last: "Li",
      handle: "@hjhs",
    },
    {
      first: "Olaf",
      last: "Creb",
      handle: "@grag",
    },
    {
      first: "Addy",
      last: "Ralf",
      handle: "@jajjja",
    },
    {
      first: "Motombo",
      last: "Sea",
      handle: "@maaam",
    },
  ],
};
