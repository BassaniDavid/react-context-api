
export default function PostsList() {

    return (
        <>
            {/* lista con i post ricevuti da app.jsx */}
            <ul className="container-posts">
                {/* funzione per trasformare l array in componenti HTMl */}
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>post numero {post.id}</h3>
                        <h3 className="title">titolo: {post.title}</h3>
                        <Link to={`/posts/${post.id}`}>
                            clicca qui per i dettagli
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}