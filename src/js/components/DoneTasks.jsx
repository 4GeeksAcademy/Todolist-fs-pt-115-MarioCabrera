export const DoneTasks = (props) => {
    return (
        <>
            <li
                className="list-group-item d-flex justify-content-between bg-success text-white"
            >
                <p className="my-auto">{props.name}</p>
                <button
                    className={` bnt border-0 mx-1`}
                >
                    <i
                        className={`fa-solid fa-circle-check py-0 px-2 text-success`}
                    >

                    </i>
                </button>
            </li>
        </>
    )
}