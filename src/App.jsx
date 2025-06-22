import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navigasi from './layout/Navigasi'
import Footer from './layout/Footer'
import Resume from './pages/Resume'
// import ComingSoon from './pages/ComingSoon'
import Project from './pages/Project'
import Contact from './pages/Contact'

function App() {
	return (
		<>
			<Navigasi />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/projects" element={<Project />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			<Footer />
		</>
  	)
}

export default App
