import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {

    const users = [
        { userName: 'luispolopolo', name: 'Luis Polo Polo', initialIsFollowing: true },
        { userName: 'junicode', name: 'Juan Carlos', initialIsFollowing: false },
        { userName: 'pepelote', name: 'Pepe Lote', initialIsFollowing: false }
    ]
    return (
        <section className="App">
            {users.map( user => { 
                const {userName, name, initialIsFollowing } = user
                return (
                <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={initialIsFollowing}>
                    {name}
                </TwitterFollowCard>
                )
            })}
        </section>
    )
}