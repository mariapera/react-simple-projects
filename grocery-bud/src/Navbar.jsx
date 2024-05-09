import { FaBars } from 'react-icons/fa6'
import { useState, useRef } from 'react'
import { links, social } from './data'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
	const linksRef = useRef(null)

    const toggleNavbar = () => {
		setIsOpen(!isOpen)
    }
	return (
		<nav className='nav'>
			<div className='nav-center'>
				<div className='nav-header'>
					<div className='logo-container'>
						<h2>
							Grosery <span>Bud</span>
						</h2>
					</div>
					<button
						className='nav-toggle'
						onClick={toggleNavbar}>
						<FaBars />
					</button>
				</div>
				<div
					className='links-container'
					style={{
						height: isOpen
							? `${linksRef.current.getBoundingClientRect().height}px`
							: '0px',
					}}>
					<ul className='links' ref={linksRef}>
						{links.map(({ id, url, text }) => {
							return (
								<li
									className='link-item'
									key={id}>
									<a
										className='link'
										href={url}>
										{text}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
				<div className='social-container'>
					{social.map(({ id, url, icon }) => {
						return (
							<a
								key={id}
								href={url}
								className='social-icon'>
								{icon}
							</a>
						)
					})}
				</div>
			</div>
		</nav>
	)
}
export default Navbar
