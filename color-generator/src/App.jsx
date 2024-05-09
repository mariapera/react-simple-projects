import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Values from 'values.js'
import { useState } from 'react'
import Form from './Form'
import ColorList from './ColorList'

function App() {
	const SHADE_NUMBER = 10
	const [colors, setColors] = useState(new Values('#150255').all(SHADE_NUMBER))

	const addColor = color => {
		try {
			const newColors = new Values(color).all(SHADE_NUMBER)
			setColors(newColors)
		} catch (error) {
			toast.error(error.message)
		}
	}

	return (
		<main className='main'>
			<ToastContainer position='top-center' />
			<Form addColor={addColor} />
			<ColorList
				colors={colors}
			/>
		</main>
	)
}

export default App
