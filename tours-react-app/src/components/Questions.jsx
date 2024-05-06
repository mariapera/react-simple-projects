import PropTypes from 'prop-types'
import Question from './Question'
import Title from './Title'

const Questions = ({ questions, activeId, toggleQuestion }) => {
	return (
		<section className='section-questions'>
			<Title>Questions</Title>
			{questions.map(question => (
				<Question
					key={question.id}
					{...question}
					activeId={activeId}
					toggleQuestion={toggleQuestion}
				/>
			))}
		</section>
	)
}

Questions.propTypes = {
	questions: PropTypes.array,
	activeId: PropTypes.any,
	toggleQuestion: PropTypes.func,
}
export default Questions
