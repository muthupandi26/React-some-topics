import React from "react";

const UserContext = React.createContext('hey context good!')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext