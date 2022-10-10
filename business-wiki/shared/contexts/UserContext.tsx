import React from "react";
import { User } from "../models/User";

export const UserContext = React.createContext(
    { username: "username", password: "password" } as User
);