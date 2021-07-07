import React from "react";
import { useSelector } from "react-redux";
import { apiKey } from "./firebase";

function Permit(props) {
  const user_info = useSelector((state) => state.user.user);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_login = sessionStorage.getItem(_session_key);

  if (is_login && user_info) {
    return <>{props.children}</>;
  }
  return null;
}

export default Permit;
