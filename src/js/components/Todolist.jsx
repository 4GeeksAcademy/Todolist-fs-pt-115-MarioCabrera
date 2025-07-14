export const Todolist = (props) => {
    return (
        <li
            className="list-group-item d-flex justify-content-between"
            onMouseOver={() => props.hovered(props.index)}
            onMouseOut={() => props.hovered(null)}
        >
            {props.name}
            <div>
                <i className={`fa-solid fa-circle-xmark py-0 px-2 text-danger ${props.hoveredIndex === props.index ? "" : ""}`}
                    onClick={() => { props.delete(props.name) }}></i>
                <i className={`fa-solid fa-circle-check py-0 px-2 text-danger ${props.hoveredIndex === props.index ? "" : ""}`}></i>
            </div>
        </li>
    );
};