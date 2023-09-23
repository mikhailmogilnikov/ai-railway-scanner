import { NavLink } from 'react-router-dom'
import '../../styles/home.scss'
import Advantages from './Advantages'

export const Home = () => {
	return (
		<div className='home-wrapper'>
			<div className='big-letters-wrapper'>
				<h2 className='big-letters'>
					Cистема аналитики свободности маршрута перед подвижным составом.
				</h2>
			</div>

			<div className='button-wrapper'>
				<NavLink to={'/presentation'} className='button select-zoom'>
					<p>О проекте</p>
				</NavLink>
				<NavLink to={'/graph'} className='button premier-button select-zoom'>
					<p>Открыть визуализацию</p>
				</NavLink>
			</div>

			<div className='mid-text-wrapper'>
				<h2>Преимущества.</h2>
			</div>

			<Advantages />

			<div className='mid-text-wrapper'>
				<h2>Исследовать.</h2>
			</div>

			<div className='button-wrapper' style={{ paddingBottom: '4em' }}>
				<NavLink to={'/presentation'} className='button select-zoom'>
					<p>О проекте</p>
				</NavLink>
				<NavLink to={'/graph'} className='button premier-button select-zoom'>
					<p>Открыть визуализацию</p>
				</NavLink>
			</div>
		</div>
	)
}
