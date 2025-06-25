import React, { useEffect, useRef, useState } from "react";
import { IconCircleCheck, IconCircleX, IconX } from "@tabler/icons-react";

export default function CustomToast({
  t,
  message,
  type = "success",
  duration = 4000,
  onClose,
}: any) {
  const [progress, setProgress] = useState(100);
  const [closing, setClosing] = useState(false);
  const intervalRef = useRef<any>(null);
  const closeTimeoutRef = useRef<any>(null);

  useEffect(() => {
    if (closing) return;
    const start = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.max(0, 100 - (elapsed / duration) * 100));
      if (elapsed >= duration) {
        clearInterval(intervalRef.current);
        handleClose();
      }
    }, 16);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [duration, closing]);

  function handleClose() {
    setClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      if (onClose) onClose();
    }, 400); // Thời gian khớp với animation
  }

  useEffect(() => {
    return () => clearTimeout(closeTimeoutRef.current);
  }, []);

  return (
    <div
      className={`relative flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg bg-white border-l-4 ${
        type === "success" ? "border-green-500" : "border-red-500"
      } animate-toast-slide-in ${closing ? "animate-toast-slide-out" : ""}`}
      style={{ minWidth: 280, maxWidth: 350 }}
    >
      <div>
        {type === "success" ? (
          <IconCircleCheck size={24} className="text-green-500" />
        ) : (
          <IconCircleX size={24} className="text-red-500" />
        )}
      </div>
      <div className="flex-1 text-sm font-medium text-neutral-800">
        {message}
      </div>
      <button
        className="ml-2 p-1 rounded hover:bg-neutral-200 transition"
        onClick={handleClose}
        aria-label="Đóng thông báo"
      >
        <IconX size={18} />
      </button>
      <div className="absolute left-0 bottom-0 h-1 w-full bg-neutral-200 rounded-b-lg overflow-hidden">
        <div
          className={`h-full ${
            type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
          style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
        ></div>
      </div>
    </div>
  );
}

// Thêm animation vào globals.css:
// @keyframes toast-slide-in { from { transform: translateX(100%); opacity: 0; } to { transform: none; opacity: 1; } }
// .animate-toast-slide-in { animation: toast-slide-in 0.4s cubic-bezier(.4,2,.6,1) both; }

// Thêm vào globals.css:
// @keyframes toast-slide-out { to { transform: translateX(100%); opacity: 0; } }
// .animate-toast-slide-out { animation: toast-slide-out 0.4s cubic-bezier(.4,2,.6,1) both; }
