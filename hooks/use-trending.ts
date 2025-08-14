"use client"

import { useState, useEffect } from 'react'
import { TrendingService } from '@/services/trending/trending.service'
import { TrendingMovie } from '@/interfaces/trending'

export const useTrending = () => {
    const [trendingMovies, setTrendingMovies] = useState<TrendingMovie[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchTrendingMovies = async () => {
        setLoading(true)
        setError(null)
        
        try {
            const trendingService = new TrendingService()
            const movies = await trendingService.getTopMovies()
            setTrendingMovies(movies)
        } catch (err: any) {
            console.error('Erro ao buscar filmes em trending:', err)
            setError(err?.response?.data?.message || err?.message || 'Erro ao carregar filmes em trending')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTrendingMovies()
    }, [])

    return {
        trendingMovies,
        loading,
        error,
        refetch: fetchTrendingMovies
    }
} 