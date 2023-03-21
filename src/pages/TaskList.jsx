import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TodoContext from '../context/TodoContext';
import { dateFormat } from '../helper/Index';

function TaskList(props) {
    const {taskList}=useContext(TodoContext);
    return (
        <div className="container">
            <div className="bg-primary text-white   p-5">
            <div className="d-flex">
                <h3>Task List</h3>
                <Link className=" btn btn-info ms-auto"></Link>
                </div>    
                <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th><span className='px-2'><i class="fa-solid fa-eye"></i></span></th>
                        <th><span className='px-2'><i class="fa-solid fa-pen-to-square"></i></span></th>
                        <th><span className='px-2'><i class="fa-light fa-trash"></i></span></th>

                    </tr>
                </thead>
                    <tbody>
                        {
                            taskList.map((item)=>{
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{dateFormat(item.dueDate)}</td>
                                        <td>Action </td>
                                    </tr>
                                    
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TaskList;