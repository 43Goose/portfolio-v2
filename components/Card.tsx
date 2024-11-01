import clsx from 'clsx';
import React from 'react'

export default function Card({ children, filled = false }: { children: React.ReactNode; filled?: boolean }) {
    return (
        <div className={clsx('mx-auto p-4 border border-dark rounded-2xl overflow-hidden', filled && 'bg-main/10')}>
            {children}
        </div>
    )
}
