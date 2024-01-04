import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "grdinline-flex grditems-center grdjustify-center grdwhitespace-nowrap grdrounded-md grdtext-sm grdfont-medium grdring-offset-white grdtransition-colors focus-visible:grdoutline-none focus-visible:grdring-2 focus-visible:grdring-slate-950 focus-visible:grdring-offset-2 disabled:grdpointer-events-none disabled:grdopacity-50 dark:grdring-offset-slate-950 dark:focus-visible:grdring-slate-300",
  {
    variants: {
      variant: {
        default: "grdbg-slate-900 grdtext-slate-50 hover:grdbg-slate-900/90 dark:grdbg-slate-50 dark:grdtext-slate-900 dark:hover:grdbg-slate-50/90",
        destructive:
          "grdbg-red-500 grdtext-slate-50 hover:grdbg-red-500/90 dark:grdbg-red-900 dark:grdtext-slate-50 dark:hover:grdbg-red-900/90",
        outline:
          "grdborder grdborder-slate-200 grdbg-white hover:grdbg-slate-100 hover:grdtext-slate-900 dark:grdborder-slate-800 dark:grdbg-slate-950 dark:hover:grdbg-slate-800 dark:hover:grdtext-slate-50",
        secondary:
          "grdbg-slate-100 grdtext-slate-900 hover:grdbg-slate-100/80 dark:grdbg-slate-800 dark:grdtext-slate-50 dark:hover:grdbg-slate-800/80",
        ghost: "hover:grdbg-slate-100 hover:grdtext-slate-900 dark:hover:grdbg-slate-800 dark:hover:grdtext-slate-50",
        link: "grdtext-slate-900 grdunderline-offset-4 hover:grdunderline dark:grdtext-slate-50",
      },
      size: {
        default: "grdh-10 grdpx-4 grdpy-2",
        sm: "grdh-9 grdrounded-md grdpx-3",
        lg: "grdh-11 grdrounded-md grdpx-8",
        icon: "grdh-10 grdw-10",
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
