import { SignUpForm } from "@/lib/components/sign-up-form";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}
