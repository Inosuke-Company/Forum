import { supabase } from '../lib/supabase'

export async function getTopics() {
  return supabase
    .from('topics')
    .select('*, categories(*), profiles(*)')
    .order('created_at', { ascending: false })
}

export async function getTopic(id: string) {
  return supabase
    .from('topics')
    .select('*, categories(*), profiles(*), posts(*)')
    .eq('id', id)
    .single()
}

export async function createTopic(payload: { category_id: string; author_id: string; title: string; content: string }) {
  return supabase.from('topics').insert(payload).select().single()
}
