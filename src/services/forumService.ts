import { supabase } from '../lib/supabase';

export async function getTopics(){
 const {data,error}=await supabase.from('topics').select('*').order('created_at',{ascending:false});
 if(error) throw error;
 return data ?? [];
}

export async function createTopic(payload: Record<string, unknown>){
 const {data,error}=await supabase.from('topics').insert(payload).select().single();
 if(error) throw error;
 return data;
}
