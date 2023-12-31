import ProblemCard from './ProblemCard'

const Problems = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Проблематика</h2>
			<div className='problem-wrapper'>
				<ProblemCard
					name={'Анализ инцидентов'}
					desc={
						'Необходимо разработать более эффективные методы мониторинга, предотвращения и реагирования на инциденты на участках рядом с железнодорожной инфраструктурой, так как текущие методы не предоставляют достаточной аналитики происшествий.'
					}
					icon='Graph'
				/>
				<ProblemCard
					name={'Появление людей на маршруте следования'}
					desc={
						'Нарушение правил на железнодорожных путях, такие как прохождение в зонах повышенной опасности, пересечение в неположенных местах и хождение по путям, может привести к травмам и даже смертельным случаям.'
					}
					icon='CurrencyRub'
				/>
				<ProblemCard
					name={'Задержка в реагировании'}
					desc={
						'Каждая потерянная секунда при реагировании на опасную ситуацию может иметь критические последствия.'
					}
					icon='Warning'
				/>
			</div>
		</div>
	)
}

export default Problems
