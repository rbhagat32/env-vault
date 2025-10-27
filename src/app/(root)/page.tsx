import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
