import PropTypes from 'prop-types'
import Tour from './Tour'
import Title from './Title'

const Tours = ({ tours, deleteTour }) => {
	return (
		<section className='section-tours'>
			<Title>Our tours</Title>
			<div className='tours'>
				{tours.map(tour => {
					return (
						<Tour
							key={tour.id}
							{...tour}
							deleteTour={deleteTour}
						/>
					)
				})}
			</div>
		</section>
	)
}

Tours.propTypes = {
  tours: PropTypes.array,
  deleteTour: PropTypes.func
}

export default Tours
