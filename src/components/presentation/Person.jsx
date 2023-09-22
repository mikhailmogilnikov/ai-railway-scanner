const Person = (props) => {
	return (
		<div className='person-wrapper'>
			<div className='avatar'>
				<img src={props.img} alt={props.name}></img>
			</div>
			<div className='text-wrapper'>
				<h2>{props.name}</h2>
				<p className='low-opacity'>{props.role}</p>
			</div>
		</div>
	)
}

export default Person
