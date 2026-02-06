import { isSupabaseConfigured, signUpWithEmail, signInWithEmail } from '@/lib/supabase'

describe('Supabase Client', () => {
  describe('isSupabaseConfigured', () => {
    it('should be defined', () => {
      expect(isSupabaseConfigured).toBeDefined()
    })

    it('should be a boolean', () => {
      expect(typeof isSupabaseConfigured).toBe('boolean')
    })
  })

  describe('signUpWithEmail', () => {
    it('should return error when Supabase is not configured', async () => {
      const result = await signUpWithEmail('test@example.com', 'password123', 'Test User')
      
      if (!isSupabaseConfigured) {
        expect(result.error).toBeDefined()
        expect(result.error?.message).toContain('not configured')
      }
    })

    it('should handle invalid inputs gracefully', async () => {
      const result = await signUpWithEmail('', '', '')
      
      expect(result).toHaveProperty('data')
      expect(result).toHaveProperty('error')
    })
  })

  describe('signInWithEmail', () => {
    it('should return error when Supabase is not configured', async () => {
      const result = await signInWithEmail('test@example.com', 'password123')
      
      if (!isSupabaseConfigured) {
        expect(result.error).toBeDefined()
        expect(result.error?.message).toContain('not configured')
      }
    })
  })
})
