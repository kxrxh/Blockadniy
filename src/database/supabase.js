import {createClient} from '@supabase/supabase-js'


const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_KEY)


export async function GetAllPoints() {
    const {data, err} = await supabase.from('main').select()
    if (err) {
        return []
    }
    return data
}

export async function GetAuthor(id) {
    const {data, err} = await supabase.from('authors').select().eq('id', id)
    if (err) {
        return []
    }
    return data
}
