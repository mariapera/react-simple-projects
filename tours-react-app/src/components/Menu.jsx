import PropTypes from 'prop-types'
import Title from './Title'
import MenuItem from './MenuItem'
import { menu as menuItems } from '../data'

const Menu = ({ menu, toggleCategory }) => {
	const categories = ['all', ...new Set(menuItems.map(item => item.category))]
	return (
		<section className='section-menu'>
			<Title>Our menu</Title>
			<div className='buttons-container'>
				{categories.map(category => (
					<button
						className='btn'
						key={category}
						onClick={() => toggleCategory(category)}>
						{category}
					</button>
				))}
			</div>
			<div className='menu-items'>
				{menu.map(item => (
					<MenuItem
						key={item.id}
						{...item}
					/>
				))}
			</div>
		</section>
	)
}

Menu.propTypes = {
	menu: PropTypes.array,
	toggleCategory: PropTypes.func,
}
export default Menu
