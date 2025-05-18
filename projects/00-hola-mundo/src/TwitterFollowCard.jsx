
import { useState } from 'react'

// export function TwitterFollowCard({formatUserName, children, userName='unknown', initialIsFollowing }) {
export function TwitterFollowCard({ children, userName='unknown', initialIsFollowing }) {
    // ? Estado interno, ya que está a nivel de cada componente
    // const state = useState(false) // Valor inicial
    // const isFollowing = state[0] // Valor del estado
    // const setIsFollowing = state[1] // Dundas el valor del estado, para cambiar el valor

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/${userName}`} alt="El avatar de MoropM" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    {/* <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span> */}
                    <span className='tw-followCard-infoUserName'>{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
} 