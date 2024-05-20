import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "grd-inline-flex grd-items-center grd-justify-center grd-gap-1 grd-whitespace-nowrap grd-rounded-lg grd-text-sm grd-font-medium grd-ring-offset-white grd-transition-colors " +
  "focus-visible:grd-outline-none focus-visible:grd-ring-2 focus-visible:grd-ring-slate-950 focus-visible:grd-ring-offset-2 " +
  "disabled:grd-pointer-events-none disabled:grd-opacity-50 " +
  "dark:grd-ring-offset-slate-950 dark:focus-visible:grd-ring-slate-300",
  {
    variants: {
      variant: {
        default: "grd-border grd-border-transparent grd-bg-slate-900 grd-text-gray-500 " +
          "dark:grd-bg-slate-50 dark:grd-text-slate-900",
        primary: "grd-border grd-border-transparent grd-bg-blue-500 grd-text-white " +
          "dark:!grd-bg-blue-600 dark:grd-text-dark-600",
        destructive:
          "grd-border grd-border-transparent grd-bg-red-500 grd-text-white " +
          "dark:grd-bg-red-900 dark:grd-text-gray-500",
        outline:
          "grd-border grd-border-gray-200 grd-bg-white grd-transition grd-duration-400 grd-text-gray-500 " +
          "dark:grd-border-transparent dark:grd-text-gray-200 dark:!grd-bg-dark-600",
        "outline-primary":
          "grd-border grd-border-blue-200 grd-bg-white grd-transition grd-duration-400 grd-text-blue-500 grd-shadow-xs " +
          "dark:!grd-border-blue-900 dark:!grd-text-blue-600 dark:grd-bg-dark-600",
        secondary:
          "grd-border grd-border-transparent grd-bg-slate-100 grd-text-slate-900 " +
          "dark:grd-bg-slate-800 dark:grd-text-gray-500",
        ghost: "grd-border grd-border-transparent hover:grd-bg-slate-100 hover:grd-text-slate-900 " +
          "dark:grd-text-gray-100 dark:hover:grd-bg-dark-500 dark:hover:grd-text-gray-100",
        link: "grd-border grd-border-transparent grd-text-slate-900 grd-underline-offset-4 " +
          "hover:grd-underline dark:grd-text-gray-500",
      },
      size: {
        default: "grd-h-10 grd-px-4 grd-py-2",
        sm: "grd-h-9 grd-px-3",
        lg: "grd-h-11 grd-px-8",
        icon: "grd-h-10 grd-w-10",
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
