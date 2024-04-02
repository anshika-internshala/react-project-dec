import { createContext } from "react";

const userContext = createContext({
    currentUser: "defaultuser",
});

export default userContext;