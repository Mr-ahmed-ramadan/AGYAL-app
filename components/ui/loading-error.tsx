import { Loader2, AlertCircle } from "lucide-react"

interface LoadingErrorProps {
  isLoading: boolean
  error: string | null
}

export function LoadingError({ isLoading, error }: LoadingErrorProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-lg font-medium">Loading...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8 text-destructive">
        <AlertCircle className="h-8 w-8" />
        <span className="ml-2 text-lg font-medium">{error}</span>
      </div>
    )
  }

  return null
}

