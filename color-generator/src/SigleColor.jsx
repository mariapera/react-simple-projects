import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

const SigleColor = ({ color, index, colorsLength}) => {
	const { hex, weight } = color
	const saveToClipboard = async () => {
		if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(`#${hex}`)
				toast.success('Color copied to clipboard')
			} catch (error) {
				toast.error('Failed to copy color to clipboard')
			}
		} else {
			toast.error('Clipboard access not available')
		}
	}
	return (
		<article
			className={`color ${index > colorsLength/2 && 'color-light'}`}
			style={{ backgroundColor: `#${hex}` }}
			onClick={saveToClipboard}>
			<p>#{hex}</p>
			<p>{weight}%</p>
		</article>
	)
}

SigleColor.propTypes = {
	color: PropTypes.object,
	index: PropTypes.number,
	colorsLength: PropTypes.number,
}
export default SigleColor
