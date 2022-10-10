import React from "react";

export const UserContext = React.createContext(
    { username: "username", password: "password", setUsername: undefined }
);