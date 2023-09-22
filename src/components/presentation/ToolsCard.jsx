const ToolsCard = ({ name, desc, img }) => {
	return (
		<div className='card-wrapper'>
			<div className='card-head'>
				<img src={img} alt={name}/>
			</div>
			<div className='card-text-wrapper'>
				<h2>{name}</h2>
				<p className='low-opacity'>{desc}</p>
			</div>
		</div>
	)
}

export default ToolsCard
