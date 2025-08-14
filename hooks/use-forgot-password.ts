"use client"

import { useState } from 'react'
import { AuthService } from '@/services/auth/auth.service'

export const useForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        
        if (!email.trim()) {
            setError('Email é obrigatório')
            return
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setError('Por favor, insira um email válido')
            return
        }

        setLoading(true)
        try {
            console.log('Enviando solicitação de recuperação de senha...')
            const authService = new AuthService()
            await authService.forgotPassword({ email })
            
            console.log('Solicitação de recuperação enviada com sucesso')
            setSuccess(true)
        } catch (err: any) {
            console.error('Erro na recuperação de senha:', err)
            setError(err?.response?.data?.message || err?.message || 'Erro ao enviar solicitação de recuperação. Tente novamente.')
        } finally {
            setLoading(false)
        }
    }

    return {
        email,
        loading,
        error,
        success,
        setEmail,
        handleSubmit
    }
} 