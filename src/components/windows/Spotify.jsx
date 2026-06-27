import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'

const Spotify = ({windowName, setWindowState}) => {
  return (
    <MacWindow width='50vw' height='50vh' windowName={windowName} setWindowState={setWindowState}>
        <div className="spotify-window">
        <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8xfQRRX1PDm?utm_source=generator&si=aac6f9e22e7b43b2" width="100%" height="100%" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify