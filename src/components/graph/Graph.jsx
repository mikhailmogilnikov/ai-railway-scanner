import { CircleNotch, CloudArrowUp } from '@phosphor-icons/react'
import '../../styles/graph.scss'
import { useState } from 'react'

const Graph = () => {
	const [state, setState] = useState('noFile')

	const changeState = () => {
		if (state === 'noFile') {
			setState('attached')
		} else {
			setState('noFile')
		}
	}

	return (
		<div className='presentation-wrapper'>
			<div className='map-wrapper'>
				<div className='map-header'>
					<h1>График визуализации данных</h1>
					{state === 'noFile' ? (
						<p className='low-opacity'>
							Ожидание csv-файла после отработки приложения.
						</p>
					) : (
						<p className='low-opacity'>Файл с данными прочитан.</p>
					)}
				</div>
				{state === 'noFile' ? (
					<div className='attach-field' onClick={changeState}>
						<CloudArrowUp className='icon-attach' />
						<h2>Прикрепите csv-файл или перетащите его в это поле</h2>
					</div>
				) : (
					<>
						<div className='map'>
							<CircleNotch
								weight='bold'
								className='icon-big loader low-opacity'
							/>
						</div>
						<div className='button-wrapper' style={{ maxWidth: '400px' }}>
							<div
								style={{ marginTop: '40px' }}
								onClick={changeState}
								className='button select-zoom'
							>
								<p>Очистить данные</p>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Graph
