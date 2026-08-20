import { cn } from "@/lib/utils"

interface TechBadgeProps {
  label: string
  className?: string
}

export function TechBadge({ label, className }: Readonly<TechBadgeProps>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors",
        className,
      )}
    >
      {label}
    </span>
  )
}
