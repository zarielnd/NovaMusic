import { useState, useEffect } from 'react'
import apiClient from '../services/apiClient'

export const useApi = (url: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    apiClient.get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}