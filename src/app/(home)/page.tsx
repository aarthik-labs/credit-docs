import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
      <p>
        <Link href="/docs" className="font-medium underline">
          Read the docs
        </Link>{" "}
        to get started!
      </p>
    </div>
  );
}
