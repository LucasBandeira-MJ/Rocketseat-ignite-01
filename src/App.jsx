import { Header } from "./components/Header"
import { Post } from "./Post"
import "./global.css"

function App() {

  return (
    <>
      <Header />
      <h1>Hello World!</h1>
      <Post 
        author="Lucas Bandeira"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, nostrum!"
      />
      <Post 
        author="Bucas Landeira"
        content="Norem Lpsum Iolor Dit Smet, Aonsectetur Cdipisicing Alit. Eui, Qostrum!"
      />
    </>
  )
}

export default App
