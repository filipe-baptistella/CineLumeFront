export interface TrendingMovie {
  id: number;
  title: string;
  year: string;
  image: string;
  rank: number;
  views: number;
  description?: string;
  genre?: string;
  duration?: string;
}

export interface TrendingResponse {
  movies: TrendingMovie[];
  total: number;
  period: 'day' | 'week' | 'month';
} 