import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollAnimation() {
  const location = useLocation()

  useEffect(() => {
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
          // } else {
          //   entry.target.classList.remove('show')
          // }
        })
      }, { threshold: 0.1 })

      document.querySelectorAll('.wait').forEach(el => observer.observe(el))

      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timeout)
  }, [location.pathname]) // re-runs on every route change
}