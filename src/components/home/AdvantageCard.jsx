import { AppWindow, ChartBar, ChartLine, UserFocus } from '@phosphor-icons/react'


const AdvantageCard = ({icon, name, desc}) => {
	let iconComponent
	if (icon === 'App') {
		iconComponent = <AppWindow weight='thin' className='icon-card adv'/>
	} else if (icon === 'Paperclip') {
		iconComponent = <UserFocus weight='thin' className='icon-card adv'/>
	} else if (icon === 'Chartline') {
		iconComponent = <ChartBar weight='thin' className='icon-card adv'/>
	} else {
		iconComponent = null
	}

	return (
		<div className='card-wrapper' style={{boxShadow: '0 0 40px 0 rgba(0, 0, 0, 0.05)'}}>
			{icon && <div className='card-head'>{iconComponent}</div>}
			<div className='card-text-wrapper'
			style={{padding: '1.5em'}}>
				<h2>{name}</h2>
				<p className='low-opacity'>{desc}</p>
			</div>
		</div>
	)
}

export default AdvantageCard
