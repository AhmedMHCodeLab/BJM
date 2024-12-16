import { BrowserRouter, Routes, Route } from 'react-router'
import {
  AboutUs,
  Gallery,
  Landing,
  Program,
  Services,
  SharedLayout,
} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="program" element={<Program />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
