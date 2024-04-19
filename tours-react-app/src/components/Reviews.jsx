import PropTypes from 'prop-types'
import Title from './Title'
import Review from './Review'

const Reviews = ({ reviews }) => {
	return (
		<section className='section-reviews'>
			<Title>Reviews</Title>
			<Review reviews={reviews} />
		</section>
	)
}

Reviews.propTypes = {
	reviews: PropTypes.array,
}

export default Reviews
