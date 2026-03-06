import { isValidEmail, isValidPassword } from './validators'

describe('Validators Unit Tests', () => {
  describe('isValidEmail', () => {
    it('should return true for a valid email', () => {
      const validEmail = 'test@example.com'
      expect(isValidEmail(validEmail)).toBe(true)
    })

    it('should return false for an email without @', () => {
      const invalidEmail = 'testexample.com'
      expect(isValidEmail(invalidEmail)).toBe(false)
    })

    it('should return false for an email without domain', () => {
      const invalidEmail = 'test@'
      expect(isValidEmail(invalidEmail)).toBe(false)
    })

    it('should return false for an empty string', () => {
      const invalidEmail = ''
      expect(isValidEmail(invalidEmail)).toBe(false)
    })

    it('should return false for an email with spaces', () => {
      const invalidEmail = 'test @example.com'
      expect(isValidEmail(invalidEmail)).toBe(false)
    })
  })

  describe('isValidPassword', () => {
    it('should return true for a valid password', () => {
      const validPassword = 'Password1!'
      expect(isValidPassword(validPassword)).toBe(true)
    })

    it('should return false for a password shorter than 8 characters', () => {
      const invalidPassword = 'Pass1!'
      expect(isValidPassword(invalidPassword)).toBe(false)
    })

    it('should return false for a password without uppercase letters', () => {
      const invalidPassword = 'password1!'
      expect(isValidPassword(invalidPassword)).toBe(false)
    })

    it('should return false for a password without numbers', () => {
      const invalidPassword = 'Password!'
      expect(isValidPassword(invalidPassword)).toBe(false)
    })

    it('should return false for a password without special characters', () => {
      const invalidPassword = 'Password1'
      expect(isValidPassword(invalidPassword)).toBe(false)
    })

    it('should return false for an empty password', () => {
      const invalidPassword = ''
      expect(isValidPassword(invalidPassword)).toBe(false)
    })
  })
})
