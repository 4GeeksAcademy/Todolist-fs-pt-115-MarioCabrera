import React from "react";
import { useState, useEffect } from "react";
import "./home.css"
import { Todolist } from "./Todolist";
// !colores.includes("purple") ? setColores([...colores, "purple"]) : setColores(colores.filter(color => color !== "purple"));

//create your first component
const Home = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [todos, setTodos] = useState(["Hacer la cama", "Fregar el suelo", "Estudiar código"]);
	const [input, setInput] = useState("Que queda por hacer")
    const hovered = (element) => {
        setHoveredIndex(element);
    };

    const deleteSelected = (element) => {
        setTodos(todos.filter(todo => todo !== element));
    };

    const pressedEnter = (e) => {
		let tarea = e.target.value
		tarea = tarea.charAt(0).toUpperCase() + tarea.slice(1).toLowerCase();
		if(e.key === "Enter") {
			setTodos((prev) => ([...prev, tarea]))			
		}

    };

    return (
        <div className="container mx-auto text-center">
            <h1 className="display-2" style={{ color: "#FF8A8A" }}>Quehaceres</h1>
            <div className="todos">
                <input 
				className="border-0 text-start fs-2" 
				type="text" 
				placeholder="Que queda por hacer?" 
				onKeyUp={pressedEnter}
				/>
                <ul className="list-group text-start">
                    {todos.map((element, index) => (
                        <Todolist
                            key={index}
                            hovered={hovered}
                            name={element}
                            index={index}
                            hoveredIndex={hoveredIndex}
                            delete={deleteSelected}
                            pressedEnter={pressedEnter}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Home;