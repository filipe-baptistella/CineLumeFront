"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AuthService } from '@/services/auth/auth.service'

export const useResetPassword = (token: string | null) => {
    const router = useRouter()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        
        if (!token) {
            setError('Token de reset inválido')
            return
        }
        
        if (!password) {
            setError('Senha é obrigatória')
            return
        }

        if (password.length < 6) {
            setError('A senha deve ter pelo menos 6 caracteres')
            return
        }

        if (password !== confirmPassword) {
            setError('As senhas não coincidem')
            return
        }

        setLoading(true)
        try {
            console.log('Resetando senha...')
            const authService = new AuthService()
            await authService.resetPassword(token, password)
            
            console.log('Senha resetada com sucesso')
            setSuccess(true)
            
            // Redirect to login after 3 seconds
            setTimeout(() => {
                router.push('/login')
            }, 3000)
        } catch (err: any) {
            console.error('Erro ao resetar senha:', err)
            setError(err?.response?.data?.message || err?.message || 'Erro ao resetar senha. Tente novamente.')
        } finally {
            setLoading(false)
        }
    }

    return {
        password,
        confirmPassword,
        loading,
        error,
        success,
        setPassword,
        setConfirmPassword,
        handleSubmit
    }
} 