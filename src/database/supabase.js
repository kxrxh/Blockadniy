import { createClient } from '@supabase/supabase-js'


const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_KEY)


export default async function getAllPoints() {
    const {data, err} = await supabase.from('main').select()
    return data
}
