import { useState, useEffect } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import LoaderPage from './components/LoaderPage'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { resume } from 'react-dom/server'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  // useEffect(() => {
  //   const timer = window.setTimeout(() => setIsLoading(false), 1000)
  //   return () => window.clearTimeout(timer)
  // }, [])

  if (isLoading) {
    return <LoaderPage setIsLoading={setIsLoading}/>
  } else{

  }

  return (
    <main>
        <Nav />
        <Dock windowState={windowState} setWindowState={setWindowState} />
        { windowState.github && <Github windowName="github" setWindowState={setWindowState} /> }
        { windowState.note && <Note windowName="note" setWindowState={setWindowState} /> }
        { windowState.resume && <Resume windowName="resume" setWindowState={setWindowState} /> }
        {windowState.spotify && <Spotify windowName="spotify" setWindowState={setWindowState} /> }
        {windowState.cli && <Cli windowName="cli" setWindowState={setWindowState} /> }
    </main>
  )
}

export default App