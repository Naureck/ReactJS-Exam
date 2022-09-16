import { useRef } from 'react'
import Video from './Component/videoAll/videoComponent/Video.js'
import Heading from './Component/heading/heading.js'

function App() {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <Video ref={videoRef}/>
      <Heading Heading/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
  
}

export default App;
