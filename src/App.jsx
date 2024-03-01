import './App.css'
import { useAnimate } from 'framer-motion'

function App() {

  const [scope, animate] = useAnimate()

  const mouseEnterAction = () => {
    
    animate([
      [".animated", {y:-45}, { duration: 0.4}],
      [".animated", {y: 0}, {duration: 0.0001}]
    ])
  }
  return (
    <>
      <div className='button-container' ref={scope}> 
        <button onMouseEnter={mouseEnterAction}>
          <a href="#">
            <div className="back">
              <h2 className='animated'>Discover more of our work</h2>
            </div>
          </a>
        </button>
      </div>
     
    </>
  )
}

export default App
