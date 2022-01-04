import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function Home(){
  return (
    <h1>HomePage</h1>
  )
}
function App() {
  return (
    <BrowserRouter>
    <Link to='/'><button>Home</button></Link>
    <Link to='/about'><button>About</button></Link>
    <Link to='/contact'><button>Contact</button></Link>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path='about' element={<h1>About Page</h1>}/>
        <Route path='contact' element={<h1>Contact Page</h1>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
