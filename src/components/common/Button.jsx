import React from "react";

const VARIANT_STYLES = {
  primary: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  secondary:
    "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:ring-red-400",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  fullWidth = false,
  ...rest
}) {
  const variantClass = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer ${variantClass} ${widthClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
