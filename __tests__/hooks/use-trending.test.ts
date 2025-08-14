import { renderHook, waitFor } from '@testing-library/react'
import { useTrending } from '@/hooks/use-trending'
import { TrendingService } from '@/services/trending/trending.service'

// Mock do TrendingService
jest.mock('@/services/trending/trending.service')

const mockTrendingService = TrendingService as jest.MockedClass<typeof TrendingService>

describe('useTrending', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch trending movies on mount', async () => {
    const mockMovies = [
      {
        id: 1,
        title: 'Test Movie',
        year: '2024',
        image: 'test.jpg',
        rank: 1,
        views: 1000
      }
    ]

    mockTrendingService.prototype.getTopMovies = jest.fn().mockResolvedValue(mockMovies)

    const { result } = renderHook(() => useTrending())

    expect(result.current.loading).toBe(true)
    expect(result.current.trendingMovies).toEqual([])
    expect(result.current.error).toBeNull()

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.trendingMovies).toEqual(mockMovies)
    expect(result.current.error).toBeNull()
    expect(mockTrendingService.prototype.getTopMovies).toHaveBeenCalledTimes(1)
  })

  it('should handle API errors', async () => {
    const errorMessage = 'Failed to fetch trending movies'
    mockTrendingService.prototype.getTopMovies = jest.fn().mockRejectedValue(new Error(errorMessage))

    const { result } = renderHook(() => useTrending())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.trendingMovies).toEqual([])
    expect(result.current.error).toBe(errorMessage)
  })

  it('should refetch movies when refetch is called', async () => {
    const mockMovies = [
      {
        id: 1,
        title: 'Test Movie',
        year: '2024',
        image: 'test.jpg',
        rank: 1,
        views: 1000
      }
    ]

    mockTrendingService.prototype.getTopMovies = jest.fn().mockResolvedValue(mockMovies)

    const { result } = renderHook(() => useTrending())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    // Reset mock to test refetch
    mockTrendingService.prototype.getTopMovies = jest.fn().mockResolvedValue([...mockMovies, {
      id: 2,
      title: 'New Movie',
      year: '2024',
      image: 'new.jpg',
      rank: 2,
      views: 500
    }])

    result.current.refetch()

    expect(result.current.loading).toBe(true)

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(mockTrendingService.prototype.getTopMovies).toHaveBeenCalledTimes(2)
  })
}) 