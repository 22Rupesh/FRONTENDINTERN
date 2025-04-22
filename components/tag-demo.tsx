"use client"

import { Badge } from "@/components/ui/badge"
import { X, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { useState } from "react"

export function TagDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>

      <Badge className="gap-1">
        <CheckCircle className="h-3.5 w-3.5" />
        Completed
      </Badge>

      <Badge variant="secondary" className="gap-1">
        <Clock className="h-3.5 w-3.5" />
        Pending
      </Badge>

      <Badge variant="destructive" className="gap-1">
        <AlertCircle className="h-3.5 w-3.5" />
        Error
      </Badge>

      <RemovableTag text="React" />
      <RemovableTag text="TypeScript" variant="secondary" />
      <RemovableTag text="Tailwind" variant="outline" />
    </div>
  )
}

interface RemovableTagProps {
  text: string
  variant?: "default" | "secondary" | "outline" | "destructive"
}

function RemovableTag({ text, variant = "default" }: RemovableTagProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Badge variant={variant} className="gap-1 group">
      {text}
      <button onClick={() => setIsVisible(false)} className="ml-1 rounded-full hover:bg-background/20 p-0.5">
        <X className="h-3 w-3" />
        <span className="sr-only">Remove {text}</span>
      </button>
    </Badge>
  )
}
