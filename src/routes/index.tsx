import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "@/components/mixer/studio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <Studio />
    </main>
  );
}
