// importo gli elementi per le rotte
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

// importo axios
import axios from 'axios'

// importo context
import PostsContext from './contexts/PostsContext'


// importo le pagine
import PostsPage from './pages/PostsPage'
import WhoWeAre from './pages/WhoWeAre'
import Homepage from './pages/Homepage'
import NoPage from './pages/NoPage'

// importo Layout
import DefaultLayout from './layouts/DefaultLayout'

import SinglePost from './pages/SinglePost'

function App() {

  // creo variabile dinamica per i post 
  const [posts, setPosts] = useState([])

  // effettuo la chiamata axios
  function fetchPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts")

      // salvo la risposta in posts
      .then(res => setPosts(res.data))

      // in caso di errore
      .catch(err => console.error(err))

  }

  // attivo useEffect in modo che qunado si carichi la pagina, invii la chiamata
  useEffect(fetchPosts, [])

  // da qui in poi è ciò che visualizzo in pagina
  return (
    <PostsContext.Provider value={{ posts }}>
      <BrowserRouter>
        <Routes>
          {/* applico le rotte delle varie pagine ad un default */}
          <Route path="/" element={<DefaultLayout />}>

            {/* homepage */}
            <Route index element={<Homepage />} />

            {/* posts. */}
            <Route path="posts" element={<PostsPage />} />

            {/* posts con rotta dinamica*/}
            <Route path="posts/:id" element={<SinglePost />} />

            {/* chi siamo */}
            <Route path="chi-siamo" element={<WhoWeAre />} />

          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </PostsContext.Provider>
  )
}

export default App
