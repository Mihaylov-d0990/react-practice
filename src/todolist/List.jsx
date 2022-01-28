

export default function List({issues}) {

    return(
        <ul className="list-non-styled padding-top-25">
            {issues.map((issue, index) => (
                <li key={index}>{issue}</li>
            ))}
        </ul>
    )
}