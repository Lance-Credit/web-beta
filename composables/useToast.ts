type ToastType = 'error' | 'success' | 'warning'

interface ToastState {
  show: boolean
  message: string
  type: ToastType
  duration: number
}

export const useToast = () => {
  const toast = useState<ToastState>('toast', () => ({
    show: false,
    message: '',
    type: 'error' as ToastType,
    duration: 5000
  }))

  const showToast = (message: string, type: ToastType = 'error', duration = 5000) => {
    toast.value = {
      show: true,
      message,
      type,
      duration
    }

    // Auto-hide toast after duration
    setTimeout(() => {
      hideToast()
    }, duration)
  }

  const hideToast = () => {
    toast.value.show = false
  }

  const showError = (message: string, duration = 5000) => {
    showToast(message, 'error', duration)
  }

  const showSuccess = (message: string, duration = 5000) => {
    showToast(message, 'success', duration)
  }

  const showWarning = (message: string, duration = 5000) => {
    showToast(message, 'warning', duration)
  }

  return {
    toast,
    showToast,
    hideToast,
    showError,
    showSuccess,
    showWarning
  }
}