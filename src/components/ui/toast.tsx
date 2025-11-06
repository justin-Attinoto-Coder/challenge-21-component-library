'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertTriangle, Info, AlertCircle } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const toastVariants = cva(
  'relative flex items-start gap-3 w-full max-w-md p-4 rounded-lg shadow-lg border backdrop-blur-sm',
  {
    variants: {
      variant: {
        success: 'bg-emerald-50/90 border-emerald-200 text-emerald-800',
        warning: 'bg-amber-50/90 border-amber-200 text-amber-800',
        information: 'bg-blue-50/90 border-blue-200 text-blue-800',
        error: 'bg-red-50/90 border-red-200 text-red-800',
      },
    },
    defaultVariants: {
      variant: 'information',
    },
  }
)

const iconVariants = cva('h-5 w-5 flex-shrink-0 mt-0.5', {
  variants: {
    variant: {
      success: 'text-emerald-600',
      warning: 'text-amber-600',
      information: 'text-blue-600',
      error: 'text-red-600',
    },
  },
})

export interface ToastProps extends VariantProps<typeof toastVariants> {
  title: string
  description?: string
  onClose?: () => void
  autoClose?: boolean
  duration?: number
}

const icons = {
  success: CheckCircle,
  warning: AlertTriangle,
  information: Info,
  error: AlertCircle,
}

export function Toast({
  variant = 'information',
  title,
  description,
  onClose,
  autoClose = true,
  duration = 5000,
}: ToastProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  const Icon = icons[variant!]

  React.useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose?.(), 300)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [autoClose, duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose?.(), 300)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            mass: 0.8
          }}
          className={cn(toastVariants({ variant }))}
        >
          <Icon className={cn(iconVariants({ variant }))} />
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm leading-5">{title}</h4>
            {description && (
              <p className="text-sm opacity-90 mt-1 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {onClose && (
            <button
              onClick={handleClose}
              className="flex-shrink-0 p-1 rounded-full hover:bg-black/5 transition-colors duration-200"
              aria-label="Close notification"
            >
              <X className="h-4 w-4 opacity-60 hover:opacity-80" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Toast Provider and Hook for managing multiple toasts
export interface ToastData extends Omit<ToastProps, 'onClose'> {
  id: string
}

export const ToastContext = React.createContext<{
  toasts: ToastData[]
  addToast: (toast: Omit<ToastData, 'id'>) => void
  removeToast: (id: string) => void
}>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
})

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastData[]>([])

  const addToast = React.useCallback((toast: Omit<ToastData, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { ...toast, id }])
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-md">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}