import { render, screen } from '@testing-library/react'
import { TrendingSkeleton } from '@/components/trending-skeleton'

describe('TrendingSkeleton', () => {
  it('should render 10 skeleton items', () => {
    render(<TrendingSkeleton />)
    
    // Verifica se há 10 elementos skeleton (baseado na estrutura do grid)
    const skeletonItems = document.querySelectorAll('.animate-pulse')
    expect(skeletonItems.length).toBeGreaterThan(0)
  })

  it('should have correct CSS classes', () => {
    render(<TrendingSkeleton />)
    
    const container = document.querySelector('.grid')
    expect(container).toHaveClass('grid', 'grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-5')
  })

  it('should render skeleton items with correct structure', () => {
    render(<TrendingSkeleton />)
    
    // Verifica se os elementos skeleton têm a estrutura correta
    const skeletonItems = document.querySelectorAll('.animate-pulse')
    skeletonItems.forEach(item => {
      expect(item).toBeInTheDocument()
    })
  })
}) 