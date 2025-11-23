import { useEffect } from "react";

export default function Model({ open, title, message, onClose }) {
  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-60 bg-black/40 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg">
        <h3 className="text-lg font-semibold mb-2 text-brand-600">{title}</h3>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          className="bg-brand-600 text-black rounded-md py-2 px-4 w-full hover:bg-brand-700 transition"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
}