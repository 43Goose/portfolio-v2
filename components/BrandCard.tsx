import { BrandType } from "@/lib/types";
import clsx from "clsx";



export default function BrandCard({ name, icon, color, size = 'md', filled = false }: BrandType & { size?: 'sm' | 'md' | 'lg'; filled?: boolean }) {
    const SIZES: { [key: string]: { container: string, content: string } } = {
        sm: { container: 'h-12 rounded-lg', content: 'gap-1 px-2 text-xl [&>svg]:text-2xl' },
        md: { container: 'h-16 rounded-xl', content: 'gap-2 px-2 text-3xl [&>svg]:text-4xl' },
        lg: { container: 'h-20 rounded-xl', content: 'gap-4 px-4 text-4xl [&>svg]:text-5xl' },
    }

    const COLORS: { [key: string]: { bg: string, border: string, text: string } } = {
        blue: { bg: 'hover:bg-blue-500/10', border: 'hover:border-blue-500', text: 'hover:text-blue-500 [&>svg]:hover:text-blue-500' },
        red: { bg: 'hover:bg-red-500/10', border: 'hover:border-red-500', text: 'hover:text-red-500 [&>svg]:hover:text-red-500' },
        green: { bg: 'hover:bg-emerald-500/10', border: 'hover:border-emerald-500', text: 'hover:text-emerald-500 [&>svg]:hover:text-emerald-500' },
        yellow: { bg: 'hover:bg-yellow-500/10', border: 'hover:border-yellow-500', text: 'hover:text-yellow-500 [&>svg]:hover:text-yellow-500' },
        orange: { bg: 'hover:bg-orange-500/10', border: 'hover:border-orange-500', text: 'hover:text-orange-500 [&>svg]:hover:text-orange-500' },
        pink: { bg: 'hover:bg-pink-500/10', border: 'hover:border-pink-500', text: 'hover:text-pink-500 [&>svg]:hover:text-pink-500' },
    }

    return (
        <div className={clsx(
            'w-full border border-main transition-colors',
            filled && 'bg-light',
            SIZES[size].container,
            COLORS[color].border
        )}>
            <div className={clsx(
                'w-full h-full flex items-center justify-center font-bold md:justify-start [&>svg]:text-main',
                SIZES[size].content,
                COLORS[color].bg,
                COLORS[color].text
            )}>
                {icon}
                <p className='hidden md:block'>{name}</p>
            </div>
        </div>
    )
}