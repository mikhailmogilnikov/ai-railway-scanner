import ProblemCard from './ProblemCard'

const Problems = () => {
	return ( <div className='wrapper'>
	<h2 className='text-mini-title'>Проблематика</h2>
	<div className='problem-wrapper'>
		<ProblemCard
			name={'Потенциальная угроза'}
			desc={
				'Каждая неровность на дороге может стать опасностью для участников движения и пешеходов.'
			}
			icon='Warning'
		/>
		<ProblemCard
			name={'Повышение экологической безопасности'}
			desc={
				'Качественное дорожное покрытие способствует уменьшению выбросов автомобильных выхлопных газов, что благоприятно сказывается на экологической ситуации в городе и стране в целом.'
			}
			icon='Tree'
		/>
		<ProblemCard
			name={'Дороговизна ремонта'}
			desc={
				'Раннее обнаружение позволяет значительно снизить затраты на ремонт покрытия.'
			}
			icon='CurrencyRub'
		/>
	</div>
</div> );
}
 
export default Problems;