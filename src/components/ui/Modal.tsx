"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  className,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Detect outside click
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (typeof window === "undefined") return null;

  return isOpen
    ? createPortal(
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div
            ref={modalRef}
            className={clsx(
              "shadow-xl p-6 w-full max-w-md relative",
              className
            )}
          >
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
}
