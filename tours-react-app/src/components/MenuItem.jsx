import PropTypes from 'prop-types'

const MenuItem = ({ title, price, img, desc }) => {
	return (
		<article className='menu-item'>
			<img
				src={img}
				alt={title}
				className='img menu-img'
			/>
			<div className='menu-item-info'>
				<header className='menu-item-header'>
					<h5>{title}</h5>
					<span className='menu-item-price'>$ {price}</span>
				</header>
				<p className='menu-item-text'>{desc}</p>
			</div>
		</article>
	)
}

MenuItem.propTypes = {
	title: PropTypes.string,
	price: PropTypes.number,
	img: PropTypes.string,
	desc: PropTypes.string,
}
export default MenuItem
