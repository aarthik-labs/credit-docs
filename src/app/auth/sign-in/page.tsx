import { SignInForm } from "@/lib/components/sign-in-form";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <SignInForm />
      </div>
    </div>
  );
}
