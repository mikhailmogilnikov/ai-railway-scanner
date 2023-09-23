import vanya from '../../resources/images/ivan.jpg'
import misha from '../../resources/images/misha.jpg'
import max from '../../resources/images/max.jpg'
import danila from '../../resources/images/danila.jpg'
import denis from '../../resources/images/denis.jpg'
import Person from './Person'

const Team = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Команда</h2>
			<div className='team-wrapper'>
				<Person name={'Иван Дьяконов'} role={'ML Engineer'} img={vanya} />

				<Person
					name={'Максим Романов'}
					role={'Fullstack Developer'}
					img={max}
				/>

				<Person
					name={'Михаил Могильников'}
					role={'Frontend Developer'}
					img={misha}
				/>

				<Person
					name={'Денис Оржеховский'}
					role={'Python Developer'}
					img={denis}
				/>

				<Person
					name={'Данила Ненашев'}
					role={'System Analyst'}
					img={danila}
				/>
			</div>
			<div className='wrapper' style={{ gap: '30px' }}>
				<h1>"space"</h1>
				<h5 className='low-opacity'>
					Состав молодых и амбициозных разработчиков, движимых желанием
					создавать.
				</h5>
			</div>
		</div>
	)
}

export default Team
