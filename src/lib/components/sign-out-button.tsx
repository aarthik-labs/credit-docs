"use client";

import { createClient } from "@/lib/backend/client";
import { Button } from "@/lib/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();

  const signOut = async () => {
    const backend = createClient();
    await backend.auth.signOut();
    router.push("/auth/sign-in");
  };

  return (
    <Button
      className="mx-2"
      variant={"secondary"}
      size={"icon-sm"}
      onClick={signOut}
    >
      <Image
        src="/log-out.svg"
        alt="Sign-Out"
        width={16}
        height={16}
        unoptimized
      />
    </Button>
  );
}
