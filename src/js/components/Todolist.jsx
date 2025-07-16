export const Todolist = (props) => {
    return (
        <li
            className="list-group-item d-flex justify-content-between"
            onMouseOver={() => props.hovered(props.index)}
            onMouseOut={() => props.hovered(null)}
        >
            <p className="my-auto">{props.name}</p>
            <div>
                <button
                    className={`${props.hoveredIndex === props.index ? "" : "d-none"} bnt border-0 mx-1`}
                    onClick={() => { props.delete(props.name) }}
                >
                    <i
                        className={`fa-solid fa-circle-xmark py-0 px-2 text-danger`}
                    >
                    </i>
                </button>
                <button
                    className={`${props.hoveredIndex === props.index ? "" : "d-none"} bnt border-0 mx-1`}
                    onClick={() => { props.complete(props.name)}}
                >
                    <i
                        className={`fa-solid fa-circle-check py-0 px-2 text-danger`}
                    >

                    </i>
                </button>
            </div>
        </li>
    );
};