

// importo l elemento Link da react
import { Link } from 'react-router-dom'
import PostsList from '../components/postsList'


export default function Posts() {

    return (
        <>
            <h1>Posts:</h1>

            {PostsList}
        </>
    )
}