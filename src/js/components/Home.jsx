import React from "react";
import { useState, useEffect } from "react";
import "./home.css"
import { Todolist } from "./Todolist";
import { DoneTasks } from "./DoneTasks";
import JSConfetti from 'js-confetti'
// !colores.includes("purple") ? setColores([...colores, "purple"]) : setColores(colores.filter(color => color !== "purple"));

//create your first component
const Home = () => {
    const jsConfetti = new JSConfetti();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [todos, setTodos] = useState(["Hacer la cama", "Fregar el suelo", "Estudiar código"]);
    const [tarea, setTarea] = useState("");
    const defaultComplete = "¡Aun no has completado ninguna tarea!";
    const [doneTasks, setDoneTasks] = useState([defaultComplete]);

    const hovered = (element) => {
        setHoveredIndex(element);
    };

    const deleteSelected = (element) => {
        setTodos(todos.filter(todo => todo !== element));
        console.log(todos);
        
    };

    const completeSelected = (e) => {
        let tarea = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
        // Si "¡Aun no has completado ninguna tarea!" está en doneTasks, eliminamos esa entrada
        if (doneTasks[0] === defaultComplete) {
            setDoneTasks([]); // Eliminar el valor predeterminado
        }
        setDoneTasks((prev) => [...prev, tarea]);
        setTodos(todos.filter(todo => todo !== e));
    };

    const pressedEnter = (e) => {
        let tarea = e.target.value;
        tarea = tarea.charAt(0).toUpperCase() + tarea.slice(1).toLowerCase();
        if (e.key === "Enter") {
            if (todos.includes(tarea) || doneTasks.includes(tarea)) {
                alert("Esa tarea ya estaba añadida");
                setTarea("");
                return;
            }
            setTodos((prev) => [...prev, tarea]);
            setTarea("");
        }
    };

    useEffect(() => {
        if (todos.length === 0 && doneTasks.length > 0 && doneTasks[0] !== defaultComplete) {
            let end = Date.now() + (5 * 10);

            // Colores para el confeti
            let colors = ['#bb0000', '#ffffff'];

            // Función para generar el efecto de confeti
            (function frame() {
                jsConfetti.addConfetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        }
    }, [doneTasks,todos]);

    return (
        <div className="container mx-auto text-center">
            <h1 className="display-2" style={{ color: "#FF8A8A" }}>Quehaceres</h1>
            <div className="todos pt-2">
                <input
                    className="border-0 text-start fs-2 mb-2"
                    type="text"
                    placeholder={"¿Que queda por hacer?"}
                    onKeyUp={pressedEnter}
                    onChange={(e) => { setTarea(e.target.value) }}
                    value={tarea}
                />
                <ul className="list-group text-start mb-4">
                    {todos.map((element, index) => (
                        <Todolist
                            key={index}
                            hovered={hovered}
                            name={element}
                            index={index}
                            hoveredIndex={hoveredIndex}
                            delete={deleteSelected}
                            pressedEnter={pressedEnter}
                            complete={completeSelected}
                            
                        />
                    ))}
                </ul>
                <ul className="list-group text-start">
                    {(doneTasks[0] === defaultComplete) ? (
                        <li className="list-group-item d-flex justify-content-between">
                            <p className="my-auto">{defaultComplete}</p>
                        </li>
                    ) : doneTasks.map((element, index) => (
                        <DoneTasks
                            key={index}
                            hovered={hovered}
                            name={element}
                            index={index}
                        />
                    ))}
                </ul>
            </div>
            <h1 className={`fs-1 my-4 ${(todos.length === 0 && doneTasks.length > 0 && doneTasks[0] !== defaultComplete) ? "" : "d-none"}`}>¡Has completado todas las tareas!</h1>
        </div>
    );
};

export default Home;