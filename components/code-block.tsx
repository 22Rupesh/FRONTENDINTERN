"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  language: string
  children: string
  className?: string
}

export function CodeBlock({ language, children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative rounded-md", className)}>
      <div className="absolute right-4 top-4">
        <button onClick={copyToClipboard} className="rounded-md p-2 text-muted-foreground hover:bg-muted">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </button>
      </div>
      <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-t-md border text-sm text-muted-foreground">
        <span>{language}</span>
      </div>
      <pre className="overflow-x-auto rounded-b-md border border-t-0 bg-black p-4 text-sm text-white">
        <code>{children}</code>
      </pre>
    </div>
  )
}
