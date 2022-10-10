import React, { Dispatch, SetStateAction } from "react";
import { User } from "../models/User";

export const UserContext = React.createContext({
        user: {
            username: "username",
            password: "password"
        } as User,
        setUser: {} as Dispatch<SetStateAction<User>>
    }
);