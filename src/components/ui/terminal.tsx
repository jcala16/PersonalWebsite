"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TerminalProps {
  className?: string
}

export function Terminal({ className }: TerminalProps) {
  const [text, setText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const fullText = `> const developer = {
>   name: "John Doe",
>   title: "Computer Scientist",
>   skills: ["Algorithms", "ML", "Distributed Systems"],
>   education: "Ph.D. Computer Science, Stanford",
>   passion: "Solving complex problems with elegant code"
> };
> 
> console.log("Welcome to my portfolio!");`

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      setText(fullText.substring(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(typing)
      }
    }, 50)

    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typing)
      clearInterval(cursorBlink)
    }
  }, [])

  return (
    <div className={cn("rounded-lg border bg-black p-4 font-mono text-sm text-green-400 shadow-xl", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400">portfolio.js</div>
      </div>
      <pre className="whitespace-pre-wrap">
        {text}
        {cursorVisible && <span className="animate-blink">|</span>}
      </pre>
    </div>
  )
}
