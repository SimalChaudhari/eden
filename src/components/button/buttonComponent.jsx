import React from "react";

const ButtonComponent = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseClasses =
    "px-4 py-2 font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 focus:outline-none";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={[baseClasses, className].filter(Boolean).join(' ')}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
