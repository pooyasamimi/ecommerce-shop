import React, { createContext, useEffect, useState } from "react";
import supabase from "../../utils/supabase/config";
import toast from "react-hot-toast";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const [notifications, setNotifications] = useState([]);

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) setUser(user);
  }
  async function getNotifs() {
    if (isLogin) {
      const { status, data } = await supabase
        .from("notifs")
        .select()
        .eq("userId", user.id);
      if (status == 200) setNotifications(data);
    }
  }

  async function addNotif(userId, title, body) {
    const { status } = await supabase
      .from("notifs")
      .insert({ userId, title, body });

    if (status == 201) getNotifs();
  }

  async function removeNotif(id) {
    const { status } = await supabase.from("notifs").delete().eq("id", id);
    if (status == 204) getNotifs();
  }

  async function userIsLoginH() {
    const { data } = await supabase.auth.getSession();

    if (data.session) setIsLogin(true);
    else setIsLogin(false);
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser({});
    toast.error("شما خارج شدید");
  }

  useEffect(() => {
    userIsLoginH();
    getUser();
  }, [isLogin]);

  useEffect(() => {
    getNotifs();
  }, [user]);
  return (
    <UserContext.Provider
      value={{
        isLogin,
        userIsLoginH,
        addNotif,
        notifications,
        removeNotif,
        user,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
