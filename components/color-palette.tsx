import type React from "react"

interface ColorPaletteProps {
  title: string
  description?: string
  children: React.ReactNode
}

export function ColorPalette({ title, description, children }: ColorPaletteProps) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="space-y-1.5">{children}</div>
    </div>
  )
}
