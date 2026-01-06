import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { createClient } from "./backend/server";
import { SignOutButton } from "./components/sign-out-button";

async function AuthAction() {
  const backend = await createClient();
  const { data, error } = await backend.auth.getClaims();
  if (error || !data?.claims) return null;
  return <SignOutButton />;
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      enabled: true,
      title: "Credit SDK by Aarthik Labs",
      transparentMode: "top",
      children: <AuthAction />,
    },
  };
}
