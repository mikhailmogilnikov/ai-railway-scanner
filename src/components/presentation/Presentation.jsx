import '../../styles/presentation.scss'

import { NavLink } from 'react-router-dom'
import Team from './Team'
import Problems from './Problems'
import Algorythm from './Algorythm'
import Tools from './Tools'
import Scale from './Scale'

const Presentation = () => {
	return (
		<div className='presentation-wrapper'>
			<Team />
			<Problems />
			<Algorythm />
			<Tools />
			<Scale />
			
			<div className='button-wrapper' style={{ maxWidth: '400px' }}>
				<NavLink to={'/map'} className='button premier-button select-zoom'>
					<p>Открыть карту</p>
				</NavLink>
			</div>

		</div>
	)
}

export default Presentation
