"use client";

import { useState } from "react";
import Button from "../ui/Button";
import AuthModal from "@/components/Auth/AuthModal";

export default function SignInButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Sign In</Button>
      {open && <AuthModal isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
}
