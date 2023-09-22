import AlgoItem from './AlgoItem'

const Algorythm = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Алгоритм</h2>

			<div className='algo-wrapper'>
				<AlgoItem
					num='1'
					name='Получение данных изображения'
					desc='Фиксация ведется с камер, датчиков и LiDAR.'
				/>
				<AlgoItem
					num='2'
					name='Классификация дорожных дефектов'
					desc='Нейросеть определяет наличие или отсутствие повреждений.'
				/>
				<AlgoItem
					num='3'
					name='Создание карты'
					desc='Создается карта дефектов для последующего планирования ремонта дорог.'
				/>
				<AlgoItem
					num='4'
					name='Интеграция системы'
					desc='Созданная карта передаётся в веб-приложение для получения оперативной информации о состоянии дороги.'
				/>
			</div>
		</div>
	)
}

export default Algorythm
