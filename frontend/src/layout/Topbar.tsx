import { UserButton } from "@clerk/react";

export default function Topbar() {
  return (
    <div className="h-16 border-b border-zinc-800 flex items-center justify-between px-6">
      <h2 className="text-lg font-medium">
        Dashboard
      </h2>

      <UserButton />
    </div>
  );
}