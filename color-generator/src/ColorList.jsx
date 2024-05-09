import { nanoid } from 'nanoid'
import SigleColor from './SigleColor'
import PropTypes from 'prop-types'

const ColorList = ({ colors }) => {
	const colorsLength = colors.length
	return (
		<section className='section-colors'>
			{colors.map((color, index) => {
				return (
					<SigleColor
						key={nanoid()}
						color={color}
						index={index}
						colorsLength={colorsLength}
					/>
				)
			})}
		</section>
	)
}

ColorList.propTypes = {
	colors: PropTypes.array,
}

export default ColorList
