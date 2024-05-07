import { useState } from "react"
import PropTypes from 'prop-types'

const Form = ({ addColor }) => {
	const [color, setColor] = useState('#150255')
	const handleSubmit = e => {
		e.preventDefault()
		addColor(color)
	}
	return (
		<section className='section-form'>
			<h3>Color Generator</h3>
			<form
				className='form'
				onSubmit={handleSubmit}>
				<input
					type='color'
					className='form-input form-input--color'
					value={color}
					onChange={e => setColor(e.target.value)}
				/>
				<input
					type='text'
					className='form-input'
					value={color}
					onChange={e => setColor(e.target.value)}
					placeholder='#150255'
				/>
				<button
					type='submit'
					className='btn'
					style={{ backgroundColor: color }}>
					Submit
				</button>
			</form>
		</section>
	)
}

Form.propTypes = {
	addColor: PropTypes.func,
}
export default Form
