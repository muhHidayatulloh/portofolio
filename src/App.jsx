import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navigasi from './layout/Navigasi'
import Footer from './layout/Footer'
import Resume from './pages/Resume'
import ComingSoon from './pages/ComingSoon'

function App() {
	return (
		<>
			<Navigasi />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/projects" element={<ComingSoon />} />
					<Route path="/contact" element={<ComingSoon />} />
				</Routes>
			<Footer />
		</>
  	)
}

export default App
