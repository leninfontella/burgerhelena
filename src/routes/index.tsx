import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Helena Burger — Fast and Tasty" },
      { name: "description", content: "Helena Burger — hambúrgueres rápidos e saborosos no Centro. Bons momentos, qualidade e ótimo custo benefício." },
      { property: "og:title", content: "Helena Burger — Fast and Tasty" },
      { property: "og:description", content: "Bons momentos, qualidade e ótimo custo benefício." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/lp/index.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#1e7fd1" }} />
  );
}
