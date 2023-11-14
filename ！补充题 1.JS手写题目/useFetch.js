import { useState, useCallback, useEffect } from 'react'

const useFetch = ({ fetchFn, params }) => {
  const [data, setData] = useState([])
  const [err, setError] = useState()
  const [loading, setLoading] = useState(false)
  
  // 执行拉取列表接口
  const fetchApi = useCallback(async () => {
      setLoading(true)
      try {
        const result = await fetchFn(params)
        setData(result)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false)
      }
  }, [fetch])

  useEffect(() => {
    fetchApi()
  }, [fetchFn，params])


  return {
    loading,
    data,
    err
  }
}
export default useFetch