import Image from "next/image";
import Link from "next/link";
import {
  ClerkLoaded,
  ClerkLoading,
  Show,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { LoaderIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata = {
  title: "HOSPITAL SCHOOL - Platforma",
  description: "Learn new languages through interactive lessons, quests, and challenges.",
};

/**
 * Hospital School platform's own home/landing page.
 */
export default function PlatformHomePage() {
  return (
    <div className="max-w-249.5 mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-8">
      <div className="relative mb-8 size-80 lg:size-106 shrink-0 lg:mb-0">
        <Image alt="Hero" fill priority src="/hero.svg" />
      </div>
      <div className="flex flex-col gap-y-8 items-center">
        <h1 className="text-xl font-bold text-center lg:text-3xl text-neutral-700 max-w-120 leading-snug">
          Learn, practice, master languages and interactive Music Classes with HOSPITAL SCHOOL.
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-82.5 w-full">
          <ClerkLoading>
            <LoaderIcon className="animate-spin size-5 text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <Show when="signed-out">
              <SignUpButton
                forceRedirectUrl="/learn"
                mode="modal"
                signInForceRedirectUrl="/learn"
              >
                <Button className="w-full" size="lg" variant="secondary">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton
                forceRedirectUrl="/learn"
                mode="modal"
                signUpForceRedirectUrl="/learn"
              >
                <Button className="w-full" size="lg" variant="primary-outline">
                  I already have an account
                </Button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <Button asChild className="w-full" size="lg" variant="secondary">
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </Show>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
