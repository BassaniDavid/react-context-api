import { useNavigate } from "react-router-dom"

export default function NoPage() {
    const navigate = useNavigate()

    return (
        <div className="error">
            <h2 >
                ops! something went terribly wrong!!!
            </h2>

            <button onClick={() => navigate(-1)}>torna alla pagina preceedente</button>
        </div>
    )
}