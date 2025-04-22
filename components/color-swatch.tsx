"use client"

import { cn } from "@/lib/utils"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface ColorSwatchProps {
  color: string
  name: string
  value: string
  textColor?: string
}

export function ColorSwatch({ color, name, value, textColor = "text-foreground" }: ColorSwatchProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
    toast({
      title: "Copied to clipboard",
      description: `${name}: ${value}`,
    })
  }

  return (
    <div className="flex items-center gap-4">
      <div className={cn("h-10 w-10 rounded-md", color)} />
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className={cn("font-medium", textColor)}>{name}</p>
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={copyToClipboard}>
            <Copy className="h-3 w-3" />
            <span className="sr-only">Copy color value</span>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">{value}</p>
      </div>
    </div>
  )
}
