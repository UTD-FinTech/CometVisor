import {useState} from "react";
import {highlight} from 'sql-highlight';

const Database = (props) => {

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    const search = async () => {
        await fetch("/api/mysql?query=" + query).then(res => res.json()).then(data => {
            if ("error" in data) {
                console.error(data);
            } else {
                let res = data["data"];
                console.log(res);
                setResult(res);
            }
        });
    }

    return (
        <div className="w-3/4 h-full flex justify-center align-middle flex-col mx-auto m-8">
            <div className="mx-auto w-full flex">
                <input
                     className="rounded-xl bg-gray-100 w-full py-2 px-4 border-2 border-gray-400"
                     html={query}
                     onChange={e => {
                         console.log(e.target.value);
                         setQuery(e.target.value)
                     }}
                     onKeyPress={event => {
                         if (event.key === 'Enter') {
                             search();
                         }
                     }}
                />
                <div onClick={search} className="px-4 py-2 text-center bg-blue-200 rounded-xl shadow-md ml-4 outline-none cursor-pointer hover:bg-blue-400">Search</div>
            </div>
            <div dangerouslySetInnerHTML={{__html: highlight(query, {html: true})}}
                 className="text-center mt-4 text-2xl"
            />
            <table className="text-3xl font-light mt-12">
                <tbody>
                    {result.map((row, idx) => (
                        <tr key={idx}>
                            {row.map((cell, idx2) => (
                                <td key={idx2} className="px-4 py-2 border-2 border-blue-800">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Database;
