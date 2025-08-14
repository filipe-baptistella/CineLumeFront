import { TrendingService } from '@/services/trending/trending.service'
import { api } from '@/lib/api'

// Mock do módulo api
jest.mock('@/lib/api', () => ({
  api: {
    get: jest.fn()
  }
}))

const mockApi = api as jest.Mocked<typeof api>

describe('TrendingService', () => {
  let trendingService: TrendingService

  beforeEach(() => {
    trendingService = new TrendingService()
    jest.clearAllMocks()
  })

  describe('getTopMovies', () => {
    it('should fetch top 10 movies successfully', async () => {
      const mockResponse = {
        data: {
          movies: [
            {
              id: 1,
              title: 'Test Movie 1',
              year: '2024',
              image: 'test-image-1.jpg',
              rank: 1,
              views: 15000
            },
            {
              id: 2,
              title: 'Test Movie 2',
              year: '2023',
              image: 'test-image-2.jpg',
              rank: 2,
              views: 12000
            }
          ],
          total: 2,
          period: 'week'
        }
      }

      mockApi.get.mockResolvedValue(mockResponse)

      const result = await trendingService.getTopMovies()

      expect(mockApi.get).toHaveBeenCalledWith('/videos/trending/top-10')
      expect(result).toEqual(mockResponse.data.movies)
      expect(result).toHaveLength(2)
    })

    it('should handle API errors', async () => {
      const errorMessage = 'Failed to fetch trending movies'
      mockApi.get.mockRejectedValue(new Error(errorMessage))

      await expect(trendingService.getTopMovies()).rejects.toThrow(errorMessage)
      expect(mockApi.get).toHaveBeenCalledWith('/videos/trending/top-10')
    })
  })

  describe('getTrendingByPeriod', () => {
    it('should fetch trending movies by week period', async () => {
      const mockResponse = {
        data: {
          movies: [
            {
              id: 1,
              title: 'Weekly Trending Movie',
              year: '2024',
              image: 'weekly-image.jpg',
              rank: 1,
              views: 8000
            }
          ],
          total: 1,
          period: 'week'
        }
      }

      mockApi.get.mockResolvedValue(mockResponse)

      const result = await trendingService.getTrendingByPeriod('week')

      expect(mockApi.get).toHaveBeenCalledWith('/videos/trending/week')
      expect(result).toEqual(mockResponse.data.movies)
    })

    it('should fetch trending movies by day period', async () => {
      const mockResponse = {
        data: {
          movies: [],
          total: 0,
          period: 'day'
        }
      }

      mockApi.get.mockResolvedValue(mockResponse)

      const result = await trendingService.getTrendingByPeriod('day')

      expect(mockApi.get).toHaveBeenCalledWith('/videos/trending/day')
      expect(result).toEqual([])
    })

    it('should use week as default period', async () => {
      const mockResponse = {
        data: {
          movies: [],
          total: 0,
          period: 'week'
        }
      }

      mockApi.get.mockResolvedValue(mockResponse)

      await trendingService.getTrendingByPeriod()

      expect(mockApi.get).toHaveBeenCalledWith('/videos/trending/week')
    })
  })
}) 