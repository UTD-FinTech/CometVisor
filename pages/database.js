import {useState} from "react";

const Database = (props) => {

    const [query, setQuery] = useState("");
    const [result, setResult] = useState("");

    const search = async () => {
        await fetch("/api/mysql?query=" + query).then(res => res.json()).then(data => {
            setResult(JSON.stringify(data["data"]));
        });
    }

    return (
        <div className="w-screen h-screen flex justify-center align-middle flex-col mx-auto">
            <div className="mx-auto w-full">
                <input className="rounded-xl bg-gray-100 w-full py-2 px-4 border-2 border-gray-400" value={query} onChange={e => setQuery(e.target.value)}/>
                <div onClick={search}>Search</div>
                <div className="text-3xl font-light">{result}</div>
            </div>
        </div>
    )
}

export default Database;
