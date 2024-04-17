import PropTypes from 'prop-types'
import { useState } from "react"

const Tour = ({ id, image, info, name, price, deleteTour }) => {
	const [readMore, setReadMore] = useState(false)
	return (
		<article className='single-tour'>
			<img
				src={image}
				alt={name}
				className='img tour-img'
			/>
			<span className='tour-price'>${price}</span>
			<div className='tour-content'>
				<h4 className='tour-name'>{name}</h4>
				<p className='tour-info'>
					{readMore ? info : `${info.substring(0, 198)}...`}
					<button
						type='button'
						className='btn btn-light'
						onClick={() => setReadMore(!readMore)}>
						{readMore ? 'show less' : 'read more'}
					</button>
				</p>
				<button
					className='btn btn-block btn-outline'
					onClick={() => deleteTour(id)}>
					not interested
				</button>
			</div>
		</article>
	)
}

Tour.propTypes = {
	id: PropTypes.string,
	image: PropTypes.string,
	info: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.string,
	deleteTour: PropTypes.func
}
export default Tour