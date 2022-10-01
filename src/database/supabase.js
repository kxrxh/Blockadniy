import {createClient} from '@supabase/supabase-js'


const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_KEY)


export default async function GetAllPoints() {
    const {data, err} = await supabase.from('main').select()
    if (err) {
        return []
    }
    return data
}
