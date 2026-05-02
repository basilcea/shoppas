export type Role = 'shopper' | 'client'

export interface UserEntity {
  id: string
  email: string
  role: Role
  display_name?: string
  photo_url?: string
  created_at: string
  updated_at: string
}
