import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-gray-500 " +
          "hover:bg-slate-900/90 " +
          "dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        primary: "bg-primary-500 text-white " +
          "hover:!bg-primary-600 " +
          "dark:!bg-primary-600 dark:hover:!bg-primary-700 dark:text-dark-600",
        destructive:
          "bg-red-500 text-white " +
          "hover:bg-red-500/90 " +
          "dark:bg-red-900 dark:text-gray-500 dark:hover:bg-red-900/90",
        outline:
          "border border-gray-200 bg-white transition duration-400 hover:border-gray-100 text-gray-500 " +
          "dark:border-transparent dark:text-gray-200 dark:bg-dark-600 dark:hover:border-gray-800",
        secondary:
          "bg-slate-100 text-slate-900 " +
          "hover:bg-slate-100/80 " +
          "dark:bg-slate-800 dark:text-gray-500 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 " +
          "dark:hover:bg-slate-800 dark:hover:text-gray-500",
        link: "text-slate-900 underline-offset-4 " +
          "hover:underline dark:text-gray-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
