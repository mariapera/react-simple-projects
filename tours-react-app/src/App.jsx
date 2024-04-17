import { useEffect, useState } from 'react'
import Tours from './components/Tours'
import Loader from './components/Loader'
import Title from './components/Title'

const url = 'https://www.course-api.com/react-tours-project'

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const [tours, setTours] = useState([])

	const deleteTour = id => {
		const newTours = tours.filter(tour => tour.id !== id)
		setTours(newTours)
	}

	const fetchTours = async () => {
		setIsLoading(true)
		try {
			const response = await fetch(url)
			if (response.ok) {
				const data = await response.json()
				setTours(data)
			}
		} catch (error) {
			console.log(error)
		}
		setIsLoading(false)
	}
	useEffect(() => {
		fetchTours()
	}, [])

	if (isLoading) {
		return (
			<main className='main'>
				<Loader/>
			</main>
		)
	}

	if (tours.length < 1) {
		return (
			<main className='main'>
				<Title>No more tours</Title>
				<button
					className='btn btn-back'
					onClick={fetchTours}>
					back to tours
				</button>
			</main>
		)
	}

	return (
		<main className='main'>
			<Tours
				tours={tours}
				deleteTour={deleteTour}
			/>
		</main>
	)
}

export default App
