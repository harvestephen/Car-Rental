  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import { About, Home, Cars, Checkout, Details, Login, Signup, NoPage, Layout } from '../pages/Pages';

  export default function routes() {
    return (
      <>
        <BrowserRouter>
          <Routes>
          
            {/* Main Website Routes */}
            <Route path="/home" element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Cars" element={<Cars />} />
              <Route path="Checkout" element={<Checkout />} />
              <Route path="Details" element={<Details />} />
            </Route>

            {/* User Authentication Routes */}
            <Route path='/Auth'>
              <Route path="Login" element={<Login />} />
              <Route path="Signup" element={<Signup />} />
            </Route>
            
            <Route path='*' element={<NoPage />}/>

          </Routes>
        </BrowserRouter>
      </>
    );
  }
