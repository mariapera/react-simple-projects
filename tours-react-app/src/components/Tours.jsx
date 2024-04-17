import PropTypes from 'prop-types'
import Tour from './Tour'
import Title from './Title'

const Tours = ({ tours, deleteTour }) => {
	return (
		<section className='tours'>
			<Title>Our tours</Title>
			{tours.map(tour => {
				return (
					<Tour
						key={tour.id}
						{...tour}
						deleteTour={deleteTour}
					/>
				)
			})}
		</section>
	)
}

Tours.propTypes = {
  tours: PropTypes.array,
  deleteTour: PropTypes.func
}

export default Tours
