import { NavLink } from 'react-router-dom'
import AiAnimation from '../../animations/AiAnimation'
import AttachAnimation from '../../animations/AttachAnimation'
import MapAnimation from '../../animations/MapAnimation'
import '../../styles/home.scss'

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
					<p>Презентация проекта</p>
				</NavLink>
				<NavLink to={'/map'} className='button premier-button select-zoom'>
					<p>Установить решение</p>
				</NavLink>
			</div>

			<h2 className='text-mini-title'>Как это работает?</h2>

			<div className='mid-text-wrapper'>
				<h2>Исследовать.</h2>
			</div>

			<div className='button-wrapper' style={{ paddingBottom: '4em' }}>
				<NavLink to={'/presentation'} className='button select-zoom'>
					<p>Презентация проекта</p>
				</NavLink>
				<NavLink to={'/map'} className='button premier-button select-zoom'>
					<p>Открыть карту</p>
				</NavLink>
			</div>
		</div>
	)
}
