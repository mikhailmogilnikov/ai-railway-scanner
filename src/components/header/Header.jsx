import '../../styles/header.scss'
import { Scan } from '@phosphor-icons/react'

import { useScroll } from '../../hooks/useScroll'
import HackatonLogo from '../../resources/svg/HackatonLogo'
import { NavLink } from 'react-router-dom'
import { RailwaysLogo } from '../../resources/svg/Railways'

export const Header = () => {
	const isScrolled = useScroll()

	return (
		<header className={`header-wrapper${isScrolled ? ' scrolled' : ''}`}>
			<div className='header-fader'></div>
			<div className='header-content'>
				<NavLink to={'/'} className='title'>
					<RailwaysLogo />
					<h1>Распознание сущностей</h1>
				</NavLink>
				<NavLink
					to={'https://hacks-ai.ru'}
					target='_blank'
					className='hackaton-header'
				>
					<HackatonLogo />
				</NavLink>
			</div>
		</header>
	)
}
