import { Link } from "react-router-dom";

export default function Base() {

    return (
        <div className="flex-8/10 flex flex-col ">
            <Link to="/weeks" className="border-b-1 border-black/30 py-2 px-4">
                <p>Week of the Days.jsx</p>
            </Link>
            <Link to="/babylonian" className="bg-white/30 border-b-1 border-black/30 py-2 px-4">
                <p>Babylonian Method.jsx</p>
            </Link>
        </div>
    )
}