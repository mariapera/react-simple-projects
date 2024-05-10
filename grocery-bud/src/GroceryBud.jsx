import { nanoid } from 'nanoid'
import { useState, useRef, useEffect } from 'react'
import SingleGroceryItem from './SingleGroceryItem'

const getLocalStorage = name => {
	const item = JSON.parse(localStorage.getItem(name) || '[]')
	return item
}
const setLocalStorage = (name, items) => {
	localStorage.setItem(name, JSON.stringify(items))
}

const GroceryBud = () => {
	const [itemName, setItemName] = useState('')
	const [list, setList] = useState(getLocalStorage('list'))
		const groceryInputRef = useRef('')

	const addItem = itemName => {
		const newItem = {
			id: nanoid(),
			name: itemName,
			completed: false,
		}
		const newList = [...list, newItem]
		setList(newList)
		setItemName('')
		setLocalStorage('list', newList)
	}

	const deleteItem = itemId => {
		const newList = list.filter(listItem => listItem.id !== itemId)
		setList(newList)
		setLocalStorage('list', newList)
	}

	const editItem = itemId => {
		const newList = list.map(listItem => {
			if (listItem.id === itemId) {
				return { ...listItem, completed: !listItem.completed }
			} else {
				return listItem
			}
		})
		setList(newList)
		setLocalStorage('list', newList)
	}

	const handleSubmit = e => {
		e.preventDefault()
		addItem(itemName)
	}

	useEffect(() => {
		groceryInputRef.current.focus()
	}, [])

	return (
		<section className='section-grocery'>
			<div className='grocery'>
				<h3>Grocery Bud</h3>
				<form
					className='grocery-form'
					onSubmit={handleSubmit}>
					<input
						type='text'
						className='grocery-input'
						ref={groceryInputRef}
						value={itemName}
						onChange={e => setItemName(e.target.value)}
					/>
					<button
						type='submit'
						className='btn add-btn'>
						Add Item
					</button>
				</form>
				<ul className='grocery-list'>
					{list.map(listItem => {
						return (
							<SingleGroceryItem
								key={listItem.id}
								{...listItem}
								deleteItem={deleteItem}
								editItem={editItem}
							/>
						)
					})}
				</ul>
			</div>
		</section>
	)
}
export default GroceryBud
