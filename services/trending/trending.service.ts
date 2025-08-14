import { api } from "@/lib/api";
import { TrendingMovie, TrendingResponse } from "@/interfaces/trending";

export class TrendingService {
  // Buscar top 10 filmes mais vistos
  async getTopMovies(): Promise<TrendingMovie[]> {
    const response = await api.get<TrendingResponse>("/videos/trending/top-10");
    return response.data.movies;
  }

  // Buscar filmes em trending por período (opcional)
  async getTrendingByPeriod(period: 'day' | 'week' | 'month' = 'week'): Promise<TrendingMovie[]> {
    const response = await api.get<TrendingResponse>(`/videos/trending/${period}`);
    return response.data.movies;
  }
} 