export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return emailRegex.test(email)
}

export const isValidPassword = (password: string): boolean => {
  if (password.length < 8) {
    return false
  }

  const hasUpperCase = /[A-Z]/.test(password)

  const hasNumber = /[0-9]/.test(password)

  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  return hasUpperCase && hasNumber && hasSpecialChar
}
