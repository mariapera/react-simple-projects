import { FaAngleLeft, FaAngleRight, FaQuoteRight } from 'react-icons/fa6'
import PropTypes from 'prop-types'
import { useState } from 'react'


const Review = ({ reviews }) => {
	const [index, setIndex] = useState(0)
	const { img, name, job, text } = reviews[index]
	const quoteIconStyles = { color: 'var(--clr-white)' }
	const angleIconStyles = {
		width: '1.3em',
		height: '1.3em',
		color: 'var(--clr-green-dark)',
		cursor: 'pointer',
	}
	const reviewsLength = reviews.length

	const checkNumber = number => {
		if (number > reviewsLength - 1) {
			return 0
		}
		if (number < 0) {
			return reviewsLength - 1
		}
		return number
	}

	const nextPerson = () => {
		setIndex(current => {
			const newIndex = current + 1
			//const newIndex = (current + 1) % reviewsLength
			return checkNumber(newIndex)
		})
	}
	const prevPerson = () => {
		setIndex(current => {
			const newIndex = current - 1
			//const newIndex = (current - 1 + reviewsLength) % reviewsLength
			return checkNumber(newIndex)
		})
	}
	const randomPerson = () => {
		setIndex(current => {
			let newIndex = Math.floor(Math.random() * reviewsLength)
			if (newIndex === current) {
				newIndex = newIndex + 1
			}
			// if (newIndex === current) {
			// 	newIndex = (newIndex + 1) % reviewsLength
			// 	return newIndex
			// }
			return checkNumber(newIndex)
		})
	}
	return (
		<article className='review'>
			<div className='img-container'>
				<img
					src={img}
					href={name}
					className='img review-img'
				/>
				<span className='img-icon'>
					<FaQuoteRight style={quoteIconStyles} />
				</span>
			</div>
			<h3 className='name'>{name}</h3>
			<h4 className='job'>{job}</h4>
			<p className='info'>{text}</p>
			<div className='btns-container'>
				<button onClick={prevPerson}>
					<FaAngleLeft style={angleIconStyles} />
				</button>
				<button onClick={nextPerson}>
					<FaAngleRight style={angleIconStyles} />
				</button>
			</div>
			<button
				className='btn'
				onClick={randomPerson}>
				Suprise me
			</button>
		</article>
	)
}

Review.propTypes = {
	reviews: PropTypes.array,
	name: PropTypes.string,
	job: PropTypes.string,
	img: PropTypes.string,
	text: PropTypes.string,
}

export default Review
