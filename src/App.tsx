
import {MemoryRouter, Route, Routes} from 'react-router';

import './App.css';
import {Movie} from './screens/Movie/Movie.jsx';
import {Movies} from './screens/Movies/Movies.jsx';
import { Login } from './screens/Login/Login.jsx';
import { Signup } from './screens/Signup/Signup.jsx';

export function App() {
  return (
    <MemoryRouter>
      <Routes>
        {/* <Route index element={<Login />} /> */}
        <Route index element={<Movies />} />
        <Route element={<Signup />} path='/signup'/>
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </MemoryRouter>
  )
}
