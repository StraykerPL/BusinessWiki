import React, { Dispatch, SetStateAction } from "react";
import { UserInterface } from "../models/UserInterface";

export const UserContext = React.createContext({
        user: {
            username: "username",
            password: "password"
        } as UserInterface,
        setUser: {} as Dispatch<SetStateAction<UserInterface>>
    }
);