import { FaAnglesRight } from 'react-icons/fa6'
import PropTypes from 'prop-types'

const Duty = ({ duty }) => {
	return (
		<div className='duty'>
			<FaAnglesRight className='duty-icon' />
			<p className='duty-text'>{duty}</p>
		</div>
	)
}

Duty.propTypes = {
	duty: PropTypes.string,
}
export default Duty
