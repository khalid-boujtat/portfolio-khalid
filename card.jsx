import React from 'react'

export function Card({ className = '', children, ...props }) {
  return <div className={`rounded-2xl border bg-white ${className}`} {...props}>{children}</div>
}
export function CardHeader({ className = '', children }) {
  return <div className={`px-4 pt-4 ${className}`}>{children}</div>
}
export function CardTitle({ className = '', children }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
}
export function CardContent({ className = '', children }) {
  return <div className={`px-4 pb-4 ${className}`}>{children}</div>
}
