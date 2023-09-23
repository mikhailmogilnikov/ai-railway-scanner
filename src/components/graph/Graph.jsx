import { CircleNotch, CloudArrowUp } from '@phosphor-icons/react'
import '../../styles/graph.scss'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import { parserCSV } from '../../parserCSV'
import Chart from './Chart'

const Graph = () => {
	const [state, setState] = useState(null)

	const changeState = () => {
		if (state === null) {
			setState('attached')
		} else {
			setState(null)
		}
	}

	const onDrop = acceptedFiles => {
		if (!acceptedFiles.length) return
		const file = acceptedFiles[0]
		const reader = new FileReader()
		reader.onload = e => {
			const csvData = e.target.result
			setState(parserCSV(csvData))
		}
		reader.readAsText(file)
	}

	return (
		<div className='presentation-wrapper'>
			<div className='map-wrapper'>
				<div className='map-header'>
					<h1>График визуализации данных</h1>
					{state === null ? (
						<p className='low-opacity'>
							Ожидание csv-файла после отработки приложения.
						</p>
					) : (
						<p className='low-opacity'>Файл с данными прочитан.</p>
					)}
				</div>
				{state === null ? (
					<Dropzone
						onDrop={onDrop}
						accept={{ 'data/csv': ['.csv'] }}
						maxFiles={1}
					>
						{({ getRootProps, getInputProps, onDropAccepted }) => (
							<div {...getRootProps()} className='attach-field'>
								<input {...getInputProps()} />
								<CloudArrowUp className='icon-attach' />
								<h2>Прикрепите csv-файл или перетащите его в это поле</h2>
							</div>
						)}
					</Dropzone>
				) : (
					<>
						<div className='map'>
							{/*<CircleNotch*/}
							{/*    weight='bold'*/}
							{/*    className='icon-big loader low-opacity'*/}
							{/*/>*/}
							<Chart data={state} width={400} height={300} />
						</div>
						<p className='low-opacity'>
							cases_count - количество случаев обнаружений критических событий.
						</p>
						<div className='button-wrapper' style={{ maxWidth: '400px' }}>
							<div
								style={{ marginTop: '40px' }}
								onClick={changeState}
								className='button select-zoom'
							>
								<p>Очистить данные</p>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Graph

// [
//     {
//         "filename": "1.mp4",
//         "cases_count": "2",
//         "timestamps": [
//             "00:22",
//             "00:25"
//         ]
//     },
//     {
//         "filename": "2.mp4",
//         "cases_count": "2",
//         "timestamps": [
//             "00:00",
//             "00:03"
//         ]
//     },
//     {
//         "filename": "3.mp4",
//         "cases_count": "1",
//         "timestamps": [
//             "00:22"
//         ]
//     },
//     {
//         "filename": "4.mp4",
//         "cases_count": "1",
//         "timestamps": [
//             "00:00"
//         ]
//     },
//     {
//         "filename": "5.mp4",
//         "cases_count": "1",
//         "timestamps": [
//             "00:00"
//         ]
//     }
// ]
