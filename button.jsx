import React from 'react'

export function Button({ asChild, children, className = '', ...props }) {
  const Tag = asChild ? 'span' : 'button'
  return (
    <Tag
      className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium border border-slate-300 hover:bg-slate-50 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
