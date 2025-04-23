import { useContext } from "react"
import PostsContext from "../contexts/PostsContext"
import { Link } from "react-router-dom"
import PostCard from "./PostCard"


export default function PostsList() {

    const { posts } = useContext(PostsContext)

    return (
        <>
            {/* lista con i post ricevuti da app.jsx */}
            <ul className="container-posts">
                {/* funzione per trasformare l array in componenti HTMl */}
                {posts.map(post => (
                    <PostCard postElement={{ post }} key={post.id} />
                ))}
            </ul>
        </>
    )
}