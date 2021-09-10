import './App.css';
import {useState} from "react";
import {nanoid} from 'nanoid'
import Task from "./components/addTask";

const App = () => {
    const [task, setTask] = useState([
        {id: "zT45u5X4Ed35ik95cbJug", number: 1, className: "task", text: "Apply for a new job"},
    {id: "Wt1HQT3K7_W0BXGrZvNPJ", number: 2, className: "task-done", text: "Writing motivational letter in Eng"},
    {id: "AL2kPUKaKRitCiK77Lu5R", number: 3, className: "task", text: "Reading about material-ui"},
    {id: "rORpT-Zw28M3Z70h3pNta", number: 4, className: "task", text: "Reading the book \"Step-by-step to React\""}
    ]);
    const [input, setInput] = useState("");


    const inputText = e => {
        setInput(e.value);
    };

    const addTask = e => {
        e.preventDefault();
        setTask([...task, {
            id: nanoid(),
            number: task.length + 1,
            className: 'task',
            text: input,
        }]);
        setInput("");
    };

    const onChangeStatus = (id) => {
        const newTask = task.map(p => {
            if (p.id === id) {
                return {...p, className: 'task task-done'};
            }

            return p;
        });

        setTask(newTask);
    }

    const removeTask = id => {
        setTask(task.filter(p => p.id !== id).map(t =>{
            return {...t, number: t.number - 1}
        }));
    };


    const taskComponents = task.map(t => (
        <Task
            key={t.id}
            className={t.className}
            number={t.number}
            text={t.text}
            onRemove={() => removeTask(t.id)}
            onChangeStatus={() => onChangeStatus(t.id)}
        >
        </Task>
    ));


    return (
        <div className="container">
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" name="name" id='name'
                       onChange={e => inputText(e.target)} value={input} required/>
                <label htmlFor="name" className="form__label">Enter your task</label>
                <button className='addTask' onClick={addTask}>Add task</button>
            </div>
            <div className="task-list">{taskComponents}</div>
        </div>
    )
};

export default App;
