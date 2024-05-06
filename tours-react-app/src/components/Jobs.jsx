import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import Title from './Title'
import Duty from './Duty'

const Jobs = ({ jobs, value, setValue }) => {
	const { title, dates, duties, company } = jobs[value]
	return (
		<section className='section-jobs'>
			<Title>Jobs</Title>
			<div className='job'>
				<aside className='buttons-container'>
					{jobs.map((job, index) => (
						<button
							key={job.id}
							className={
								value === index ? 'btn job-btn active-btn' : 'btn job-btn'
							}
							onClick={() => setValue(index)}>
							{job.company}
						</button>
					))}
				</aside>
				<article className='single-job'>
					<h3 className='job-title'>{title}</h3>
					<span className='job-company'>{company}</span>
					<p className='job-dates'>{dates}</p>
					{duties.map(duty => (
						<Duty
							key={nanoid()}
							duty={duty}
						/>
					))}
				</article>
			</div>
		</section>
	)
}

Jobs.propTypes = {
	jobs: PropTypes.array,
	value: PropTypes.number,
	setValue: PropTypes.func,
}
export default Jobs
