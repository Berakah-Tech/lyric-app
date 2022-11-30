import React from "react";

const ErrorMessage = ({ msg }: { msg: string }) => {
  return (
    <div className="error-msg-container">
      <p className="error-msg mt-2 rounded bg-red-600 px-2 py-1 text-xs text-red-50">
        {msg}
      </p>
    </div>
  );
};

export default ErrorMessage;
