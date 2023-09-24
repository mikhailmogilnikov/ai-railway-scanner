import { Warning, PersonSimpleRun, Graph } from '@phosphor-icons/react'

const ProblemCard = ({ icon, name, desc }) => {
	let iconComponent
	if (icon === 'Warning') {
		iconComponent = <Warning className='icon-card'/>
	} else if (icon === 'Graph') {
		iconComponent = <Graph className='icon-card'/>
	} else if (icon === 'CurrencyRub') {
		iconComponent = <PersonSimpleRun className='icon-card'/>
	} else {
		iconComponent = null
	}

	return (
		<div className='card-wrapper'>
			<div className='card-head'>{iconComponent}</div>
			<div className='card-text-wrapper'>
				<h2>{name}</h2>
				<p className='low-opacity'>{desc}</p>
			</div>
		</div>
	)
}

export default ProblemCard
