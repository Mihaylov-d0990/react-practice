

export default function List({issues}) {

    return(
        <ul className="list-non-styled">
            {issues.map((issue, index) => (
                <li key={index}>{issue}</li>
            ))}
        </ul>
    )
}