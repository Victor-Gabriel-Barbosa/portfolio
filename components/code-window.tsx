import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal"
import { cn } from "@/lib/utils"

export function CodeWindow({ className }: Readonly<{ className?: string }>) {
  return (
    <Terminal className={cn("shadow-xl shadow-black/5", className)}>
      <TypingAnimation className="text-muted-foreground">
        {"// dev.ts"}
      </TypingAnimation>

      <AnimatedSpan>
        <span>
          <span className="text-primary">const</span>
          <span className="text-foreground"> dev</span>
          <span className="text-muted-foreground"> = {"{"}</span>
        </span>
      </AnimatedSpan>

      <AnimatedSpan className="pl-4">
        <span>
          <span className="text-chart-2">nome</span>
          <span className="text-muted-foreground">: </span>
          <span className="text-primary">'Victor Gabriel'</span>
          <span className="text-muted-foreground">,</span>
        </span>
      </AnimatedSpan>

      <AnimatedSpan className="pl-4">
        <span>
          <span className="text-chart-2">curso</span>
          <span className="text-muted-foreground">: </span>
          <span className="text-primary">'Sistemas de Informação'</span>
          <span className="text-muted-foreground">,</span>
        </span>
      </AnimatedSpan>

      <AnimatedSpan className="pl-4">
        <span>
          <span className="text-chart-2">foco</span>
          <span className="text-muted-foreground">: [</span>
          <span className="text-primary">'Full Stack'</span>
          <span className="text-muted-foreground">, </span>
          <span className="text-primary">'IA'</span>
          <span className="text-muted-foreground">],</span>
        </span>
      </AnimatedSpan>

      <AnimatedSpan className="pl-4">
        <span>
          <span className="text-chart-2">disponível</span>
          <span className="text-muted-foreground">: </span>
          <span className="text-primary">true</span>
          <span className="text-muted-foreground">,</span>
        </span>
      </AnimatedSpan>

      <AnimatedSpan>
        <span className="text-muted-foreground">{"}"}</span>
      </AnimatedSpan>
    </Terminal>
  )
}
