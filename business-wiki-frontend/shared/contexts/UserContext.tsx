import React, { Dispatch, SetStateAction, createContext } from "react";
import { UserInterface } from "../models/UserInterface";

export const UserContext = createContext({
        user: {
            username: "username",
            password: "password"
        } as UserInterface,
        setUser: {} as Dispatch<SetStateAction<UserInterface>>
    }
);