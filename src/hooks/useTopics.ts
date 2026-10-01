import { useEffect, useState } from 'react'
import { getTopics } from '../services/topics.service'

export function useTopics() {
  const [topics, setTopics] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTopics().then(({ data }) => {
      setTopics(data ?? [])
      setLoading(false)
    })
  }, [])

  return { topics, loading }
}
