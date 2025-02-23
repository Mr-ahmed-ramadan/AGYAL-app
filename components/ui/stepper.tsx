import { Check } from "lucide-react"

interface Step {
  title: string
  description: string
}

interface StepperProps {
  steps: Step[]
  currentStep: number
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {index < currentStep ? <Check className="w-5 h-5" /> : index + 1}
          </div>
          <div className="text-xs mt-2 text-center">
            <div className="font-medium">{step.title}</div>
            <div className="text-muted-foreground">{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

