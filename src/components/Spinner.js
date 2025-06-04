import React from "react";
import spinner from "./loading.gif";
export default function Spinner() {
  return (
    <div>
      <img src={spinner} alt="failed to load" />
    </div>
  );
}
