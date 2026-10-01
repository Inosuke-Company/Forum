import { supabase } from '../lib/supabase'

export async function getPosts(topicId: string) {
  return supabase
    .from('posts')
    .select('*, profiles(*)')
    .eq('topic_id', topicId)
    .order('created_at', { ascending: true })
}

export async function createPost(payload: { topic_id: string; author_id: string; content: string }) {
  return supabase.from('posts').insert(payload).select().single()
}
