import React from "react";
import { Toaster } from "react-hot-toast";

export const Alert = ({ props }) => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        // Define default options
        className: "",
        style: {
          margin: "170px",
          background: "#fff",
          color: "black",
          width: 2000,
          zIndex: 1,
        },
        duration: 5000,
        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: "green",
          },
        },
        error: {
          duration: 4000,
        },
      }}
    />
  );
};
