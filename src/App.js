import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Pagenotfound from './pages/Pagenotfound'
import { Paper, ThemeProvider,createTheme } from '@mui/material'

function App() {
  const theme = createTheme({
    palette:{
      type:'dark',
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Paper>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/*' element={<Pagenotfound/>}/>
      </Routes>
      </BrowserRouter>
      </Paper>
      </ThemeProvider>
  );
}

export default App;
