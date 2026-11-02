"use client"

import { buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { motion, useReducedMotion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { useId, useRef, useState } from "react"
import confetti from "canvas-confetti"
import NumberFlow from "@number-flow/react"

export interface PricingPlan {
  name: string
  price: string
  yearlyPrice: string
  period: string
  features: string[]
  description: string
  buttonText: string
  href: string
  isPopular: boolean
}
export interface PricingProps {
  plans: PricingPlan[]
  title?: string
  description?: string
}

export function Pricing({ plans, title = "Simple, Transparent Pricing", description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support." }: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const reducedMotion = useReducedMotion()
  const switchRef = useRef<HTMLButtonElement>(null)
  const id = useId()

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked)
    if (checked && switchRef.current && !reducedMotion) {
      const rect = switchRef.current.getBoundingClientRect()
      void confetti({
        particleCount: 50, spread: 60,
        origin: { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight },
        colors: ["#aec643", "#6f9a2a", "#dce8be", "#4b5546"],
        ticks: 200, gravity: 1.2, decay: 0.94, startVelocity: 30, shapes: ["circle"], disableForReducedMotion: true,
      })
    }
  }

  return (
    <div className="pricing-ui mx-auto w-full max-w-6xl px-5 py-20">
      <div className="mb-12 space-y-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        <p className="whitespace-pre-line text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="mb-14 flex items-center justify-center gap-3">
        <Switch id={id} ref={switchRef} checked={!isMonthly} onCheckedChange={handleToggle} />
        <Label htmlFor={id} className="cursor-pointer font-semibold">Annual billing <span className="text-muted-foreground">(Save 20%)</span></Label>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={reducedMotion ? false : { y: 24, opacity: 1 }}
            whileInView={{ y: !reducedMotion && isDesktop && plan.isPopular ? -20 : 0, opacity: 1, scale: !reducedMotion && isDesktop && !plan.isPopular ? 0.96 : 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: "spring", stiffness: 100, damping: 30, delay: reducedMotion ? 0 : index * 0.08 }}
            className={cn("relative flex min-w-0 flex-col rounded-2xl border border-solid bg-background p-6 text-center", plan.isPopular ? "z-10 border-2 border-primary" : "border-border")}
          >
            {plan.isPopular && <div className="absolute right-0 top-0 flex items-center rounded-bl-xl rounded-tr-xl bg-primary px-2 py-0.5 text-primary-foreground"><Star aria-hidden="true" className="h-4 w-4 fill-current" /><span className="ml-1 font-semibold">Popular</span></div>}
            <p className="text-base font-semibold text-muted-foreground">{plan.name}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2">
              <NumberFlow value={Number(isMonthly ? plan.price : plan.yearlyPrice)} locales="en-US" format={{ style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }} animated={!reducedMotion} transformTiming={{ duration: 500, easing: "ease-out" }} className="text-5xl font-bold tracking-tight text-foreground tabular-nums" />
              {plan.period !== "Next 3 months" && <span className="text-sm font-semibold text-muted-foreground">/ {plan.period.replace(/^per /, "")}</span>}
            </div>
            <p className="mt-2 text-xs leading-5 text-muted-foreground" aria-live="polite">{isMonthly ? "billed monthly" : `${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number(plan.yearlyPrice) * 12)} billed annually`}</p>
            <ul className="mt-5 flex flex-1 flex-col gap-2">
              {plan.features.map((feature) => <li key={feature} className="flex items-start gap-2"><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" /><span className="text-left">{feature}</span></li>)}
            </ul>
            <hr className="my-4 w-full border-0 border-t border-solid border-border" />
            <a href={plan.href} className={cn(buttonVariants({ variant: "outline" }), "w-full whitespace-normal text-base font-semibold transition-colors hover:bg-primary hover:text-primary-foreground", plan.isPopular && "bg-primary text-primary-foreground")}>{plan.buttonText}</a>
            <p className="mt-6 text-xs leading-5 text-muted-foreground">{plan.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
