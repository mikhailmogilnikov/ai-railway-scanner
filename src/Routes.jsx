import { Route, Routes } from 'react-router-dom'
import { Home } from './components/home/Home'
import Presentation from './components/presentation/Presentation'
import Graph from './components/graph/Graph'

export const ProjectRoutes = () => {
	return (
		<main className='content-wrapper'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/presentation' element={<Presentation />} />
				<Route path='/graph' element={<Graph />} />
			</Routes>
		</main>
	)
}
