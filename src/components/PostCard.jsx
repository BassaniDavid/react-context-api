import { Link } from "react-router-dom"

export default function PostCard({ postElement }) {
    const { post } = postElement
    return (<li>
        <h3>post numero {post.id}</h3>
        <h3 className="title">titolo: {post.title}</h3>
        <Link to={`/posts/${post.id}`}>
            clicca qui per i dettagli
        </Link>
    </li>)
}