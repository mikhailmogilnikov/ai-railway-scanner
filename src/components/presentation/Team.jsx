import vanya from '../../resources/images/photo_2023-09-10 02.10.21.jpeg'
import misha from '../../resources/images/tempImagerDJpu3.jpg'
import max from '../../resources/images/photo_2023-09-10 02.14.57.jpeg'
import Person from './Person'

const Team = () => {
	return ( <div className='wrapper'>
	<h2 className='text-mini-title'>Команда</h2>
	<div className='team-wrapper'>
		<Person name={'Иван Дьяконов'} role={'ML Engineer'} img={vanya} />

		<div className='line'></div>

		<Person
			name={'Максим Романов'}
			role={'Fullstack Developer'}
			img={max}
		/>

		<div className='line'></div>

		<Person
			name={'Михаил Могильников'}
			role={'Frontend Developer'}
			img={misha}
		/>
	</div>
	<div className='wrapper' style={{ gap: '30px' }}>
		<h1>"space"</h1>
		<h5 className='low-opacity'>
			Состав молодых и амбициозных разработчиков, движимых желанием
			создавать.
		</h5>
	</div>
</div> );
}
 
export default Team;