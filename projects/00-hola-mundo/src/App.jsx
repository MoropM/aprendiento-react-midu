import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'
// import { useState } from 'react'

const users = [
    {
        name: 'Moroni_pM',
        isFollowing: false,
        userName: 'Moroni_pM'
    },
    {
        name: 'midudev',
        isFollowing: true,
        userName: 'midudev'
    },
    {
        name: 'xyz02',
        isFollowing: false,
        userName: 'xyz02'
    },
    {
        name: 'pedromichel',
        isFollowing: false,
        userName: 'pedromichel'
    }
]
export function App() {
    // const formatUName = (username) => `@${username}`
    // const moropM = { isFollowing: false, userName: 'Moroni_pM' }
    // const [ name, setName ] = useState('pedromichel')


    return (
        <section className='App'>
            {/* <TwitterFollowCard formatUserName={formatUName} {...moropM}>
                Moroni Pérez Méndez
            </TwitterFollowCard> */}
            {/* <TwitterFollowCard formatUserName={formatUName} userName='midudev' initialIsFollowing >
                Miguel Angel Duran
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUName} userName='xyz02'>
                Otro usuario nuevo
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUName} userName='pedromichel' >
                Otro usuario 2 nuevo
            </TwitterFollowCard> */}

            {/* <button onClick={()=> setName('Moroni_pM')} > 
                Cambio nombre
            </button> */}

            {
                users.map((user)  => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName} 
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}