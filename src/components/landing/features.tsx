import type { LucideIcon } from "lucide-react";
import { Gauge, Layers, Shield, Sparkles, Users, Zap } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Lançamento rápido",
    description:
      "Estrutura Next.js + shadcn/ui para sair do template e ir para o produto com menos setup.",
    icon: Zap,
  },
  {
    title: "Design consistente",
    description:
      "Tokens de cor, tipografia e cards padronizados para uma interface limpa em qualquer tela.",
    icon: Sparkles,
  },
  {
    title: "Performance nativa",
    description:
      "App Router, componentes de servidor e Tailwind para páginas leves e carregamento rápido.",
    icon: Gauge,
  },
  {
    title: "Base segura",
    description:
      "TypeScript estrito e componentes tipados reduzem erros e deixam o código mais previsível.",
    icon: Shield,
  },
  {
    title: "Arquitetura modular",
    description:
      "Seções isoladas (Header, Hero, Features, Footer) para evoluir a landing sem bagunçar a página.",
    icon: Layers,
  },
  {
    title: "Feito para o usuário",
    description:
      "Navegação clara, CTAs visíveis e layout mobile-first para converter desde o primeiro acesso.",
    icon: Users,
  },
];

export function Features() {
  return (
    <section id="recursos" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div id="sobre" className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Tudo o que você precisa para começar
          </h2>
          <p className="mt-3 text-muted-foreground">
            Uma landing enxuta, responsiva e com os blocos certos para apresentar
            o produto com clareza.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="h-full transition-colors hover:bg-muted/40">
              <CardHeader>
                <span className="mb-3 flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="size-4" aria-hidden />
                </span>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
