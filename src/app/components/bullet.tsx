
type bulletProps ={
    id: number
    role: string
    company: string
    description: string
    from: Date
    to: Date | null
    skills: {name: string}[]
}
export function Bullet({id, role, description, company, from, to, skills}: bulletProps){
    return(
        <main>
            <div className='w-4 h-4 bg-slate-900 rounded-full'></div>
        </main>
    )
}