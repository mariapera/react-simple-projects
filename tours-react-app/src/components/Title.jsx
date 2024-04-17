import PropTypes from 'prop-types'

const Title = ({ children }) => {
	return (
		<div className='title'>
			<h2>{children}</h2>
			<div className='title-underline'></div>
		</div>
	)
}

Title.propTypes = {
	children: PropTypes.string
}
export default Title
