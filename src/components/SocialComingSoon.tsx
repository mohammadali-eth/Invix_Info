import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ComingSoon({ platform }: { platform: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="mb-8 p-4 rounded-full bg-primary/10">
        <Rocket className="h-12 w-12 text-primary animate-bounce" />
      </div>
      <h1 className="text-4xl font-bold mb-4">{platform} Page</h1>
      <p className="text-xl text-muted-foreground mb-8">
        This page has not been created yet. It is coming soon!
      </p>
      <Link href="/">
        <Button size="lg">Back to Home</Button>
      </Link>
    </div>
  );
}
