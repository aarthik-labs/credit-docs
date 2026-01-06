"use client";

import { createClient } from "@/lib/backend/client";
import { Button } from "@/lib/components/ui/button";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();

  const signOut = async () => {
    const backend = createClient();
    await backend.auth.signOut();
    router.push("/auth/sign-in");
  };

  return <Button onClick={signOut}>Sign-Out</Button>;
}
