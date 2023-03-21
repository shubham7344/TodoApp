import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import CreateTask from './pages/CreateTask';
import TaskList from './pages/TaskList';
import Notfound from './pages/Notfound';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import { TodoProvider } from './context/TodoContext';



function App() {
  return (
    <BrowserRouter>
    <TodoProvider>
 
    <Navigation />
    <Routes>
      <Route path='/' element={<Navigate to='/login'/>}></Route>
    <Route path='/' element={<Home />}>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
    </Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/profile' element={<Profile />}></Route>
    <Route path='/create-task' element={<CreateTask />}></Route>
    <Route path='/task-list' element={<TaskList />}></Route>
    <Route path='*' element={<Notfound />}></Route>
    </Routes>
         
    </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
