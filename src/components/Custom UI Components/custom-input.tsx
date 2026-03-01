"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  showPasswordToggle?: boolean;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, type, showPasswordToggle = false, placeholder, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const isPassword = type === "password";
    const inputType =
      showPasswordToggle && isPassword
        ? showPassword
          ? "text"
          : "password"
        : type;

    return (
      <div className="relative w-full">
        {/* Input Field */}
        <input
          ref={ref}
          type={inputType}
          placeholder=" " 
          className={cn(
            "peer w-full rounded-xl border-2 border-white/50 bg-[#717171]/20 px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/50 disabled:cursor-not-allowed disabled:opacity-50",
            showPasswordToggle && isPassword ? "pr-10" : "",
            className
          )}
          {...props}
        />
        {/* Placeholder Text with upward animation*/}
        <label
          className={cn(
            "pointer-events-none absolute transition-all duration-200 z-10",
            "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-white",
            "peer-focus:-top-6 peer-focus:translate-y-0 peer-focus:left-1 peer-focus:text-xs peer-focus:text-white",
            "peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:left-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white"
          )}
        >
          {placeholder}
        </label>

        {/* Password Toggle Button (EYE Icon) */}
        {showPasswordToggle && isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export { CustomInput };