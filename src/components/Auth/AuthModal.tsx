"use client";

import { useState } from "react";
import Modal from "../Modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Button from "../ui/Button";
import Image from "next/image";

export default function AuthModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [openSignIn, setOpenSignIn] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-black border border-zinc-700 rounded-md p-3 flex flex-col items-center space-y-4">
        <h1 className="text-xl font-semibold text-center">Welcome</h1>

        <Button onClick={onClose} className="flex gap-2">
          <Image
            src="/icons/google.svg"
            priority
            alt="Google Login"
            height={18}
            width={18}
          />
          <span>Continue with Google</span>
        </Button>

        {openSignIn ? <SignIn /> : <SignUp />}

        <button
          type="button"
          onClick={() => setOpenSignIn(!openSignIn)}
          className="text-sm text-blue-500 hover:underline w-full text-center"
        >
          {openSignIn
            ? "Don't have an account? Register"
            : "Already have an account? Sign In"}
        </button>
      </div>
    </Modal>
  );
}
