import { api } from '../services/api'

export const getPosts = async () => {
  const { data } = await api.get('/posts')

  if (data) {
    return data
  }

  return []
}

export const getPostBySlug = async (id) => {
  try {
    const { data, error } = await api.get(`/posts?id=eq.${id}`)

    if (error) throw new Error(error.message)
    if (!data || data?.length === 0) return { error: 'Post não encontrado' }
    return data[0]
  } catch (error) {
    console.error('Erro ao buscar o post:', error)
    return { error: 'Erro ao buscar o post' }
  }
}
