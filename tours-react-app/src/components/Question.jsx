import PropTypes from 'prop-types'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const Question = ({ id, title, info, activeId, toggleQuestion }) => {
	const isActive = activeId === id
	return (
		<article className='question'>
			<header className='question-header'>
				<h5 className='question-title'>{title}</h5>
				<button
					className='question-btn'
					onClick={() => toggleQuestion(id)}>
					{isActive ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
				</button>
			</header>
			{isActive && <p className='question-info'>{info}</p>}
		</article>
	)
}

Question.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	info: PropTypes.string,
	activeId: PropTypes.any,
	toggleQuestion: PropTypes.func,
}
export default Question
