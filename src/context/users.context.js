import React from "react"

export const users = [
  {
    name: "Andrew",
    list: [
      'TV',
      'Curtains',
    ],
  },
  {
    name: "Ben",
    list: [
      'Vodka',
      'Beer',
    ],
  },
  {
    name: "Conor",
    list: [
      'Speaker',
      'Phone',
    ],
  },
];

export const UsersContext = React.createContext(users);
