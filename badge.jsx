import React from 'react'

export function Badge({ children, className = '', variant = 'default' }) {
  const styles = variant === 'secondary'
    ? 'bg-slate-100 text-slate-700 border border-slate-200'
    : 'bg-slate-900 text-white'
  return (
    <span className={`inline-flex items-center rounded-full text-xs px-3 py-1 ${styles} ${className}`}>
      {children}
    </span>
  )
}
