import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import React from "react";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
function NavBar() {
  return (
    <nav className="flex justify-between w-full items-center py-4 px-8 h-[60px]">
      <Logo />

      <div className="flex gap-4 items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default NavBar;
