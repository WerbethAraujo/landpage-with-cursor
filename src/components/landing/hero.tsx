import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.7_0.08_264_/_0.18),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,oklch(0.45_0.1_264_/_0.28),transparent_55%)]"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="mb-6 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
          Novo · Landing page pronta para evoluir
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Construa experiências digitais que as pessoas realmente querem usar
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          A Lumina reúne design, performance e componentes prontos para você
          lançar uma presença online moderna — com uma base Next.js limpa e
          pronta para crescer.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            size="lg"
            className="h-11 px-5 text-base"
            nativeButton={false}
            render={<a href="#contato" />}
          >
            Começar agora
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 px-5 text-base"
            nativeButton={false}
            render={<a href="#recursos" />}
          >
            Ver recursos
          </Button>
        </div>
      </div>
    </section>
  );
}
