
import './App.css'

const clientId = `46f593ad43d1714479a2`
function App() {
  
  const loginWithGithub = () => {
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${clientId}`)
  }
  return (
    <div className="App">
      <button onClick={loginWithGithub}>
        login with Github
      </button>
    </div>
  )
}

export default App
