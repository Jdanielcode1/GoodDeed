"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Clock } from "lucide-react"

export function TimePicker({
  value,
  onChange,
  disabled,
  className,
}: {
  value?: string
  onChange?: (time: string) => void
  disabled?: boolean
  className?: string
}) {
  const intervals = 30 // minutes
  const times = React.useMemo(() => {
    const times = []
    for (let i = 0; i < 24 * (60 / intervals); i++) {
      const hour = Math.floor((i * intervals) / 60)
      const minute = (i * intervals) % 60
      times.push(`${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`)
    }
    return times
  }, [])

  return (
    <Select
      value={value}
      onValueChange={onChange}
      disabled={disabled}
    >
      <SelectTrigger className={className}>
        <Clock className="mr-2 h-4 w-4" />
        <SelectValue placeholder="Select time" />
      </SelectTrigger>
      <SelectContent>
        {times.map((time) => (
          <SelectItem key={time} value={time}>
            {time}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}