import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

// importo axios
import axios from 'axios'

export default function SinglePost() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [postDetails, setPostsDetails] = useState({})

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

            // salvo la risposta in postDetails
            .then(res => setPostsDetails(res.data))

            // in caso di errore
            .catch(err => console.log(err))


    }, [{ id }])

    // funzione per andare al post successivo
    function postPlus() {
        if (id < 100) {
            return (parseInt(id) + 1)
        }
        return id
    }

    // funzione per andare al post precedente
    function postminus() {
        if (id >= 2) {
            return (parseInt(id) - 1)
        }
        else {
            return id
        }
    }

    return (
        <div className="singlepost">
            <p>numero post: {id}</p>
            <h4>dettagli:</h4>
            <p>{postDetails.title}</p>
            <button onClick={() => navigate(-1)}>torna alla pagina preceedente</button>
            <Link to={`/posts/${postPlus()}`}>
                <button>prossimo post</button>
            </Link>
            <Link to={`/posts/${postminus()}`}>
                <button>post precedente</button>
            </Link>
        </div>
    )
}