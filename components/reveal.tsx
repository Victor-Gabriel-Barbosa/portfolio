"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Readonly<RevealProps>) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  )
}
