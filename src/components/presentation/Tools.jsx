import ToolsCard from './ToolsCard'
import Python from '../../resources/images/python.png'
import JavaScript from '../../resources/images/JavaScript.png'
import OpenCV from '../../resources/images/OpenCV.png'

const Tools = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Технологии</h2>

			<div className='grid-3-wrapper'>
				<ToolsCard
					img={Python}
					name={'Python'}
					desc={
						'Язык программирования. Применяется для работы нейросети.'
					}
				/>
				<ToolsCard
					img={JavaScript}
					name={'JavaScript'}
					desc={
						'Язык программирования. Служит проводником между интерфейсом и программой.'
					}
				/>
				<ToolsCard
					img={OpenCV}
					name={'OpenCV'}
					desc={
						'Библиотека алгоритмов компьютерного зрения и обработки изображений.'
					}
				/>
				<ToolsCard
					name={'YOLOv4'}
					desc={
						'Быстрая и точная real-time нейросеть. Может запускаться на слабых машинах.'
					}
				/>
				<ToolsCard
					name={'Eel'}
					desc={
						'Библиотека для создания десктопных приложений с веб-технологиями и Python.'
					}
				/>
				<ToolsCard
					name={'OpenLabeling'}
					desc={'Инструмент для разметки полученного датасета.'}
				/>
				<ToolsCard
					name={'HTML'}
					desc={
						'Язык разметки, на нём строится структура веб-сайта и приложения.'
					}
				/>
				<ToolsCard
					name={'SCSS'}
					desc={
						'Препроцессор для CSS. Оптимизирует работу с вёрсткой контента.'
					}
				/>
				<ToolsCard
					name={'React'}
					desc={
						'Библиотека для создания пользовательских интерфейсов на JavaScript.'
					}
				/>
				<ToolsCard
					name={'React-dropzone'}
					desc={
						'Библиотека для React, позволяющая делать продвинутые области прикрепления файлов.'
					}
				/>
				<ToolsCard
					name={'Recharts'}
					desc={
						'Библиотека для построения графиков на основе полученных данных.'
					}
				/>
				<ToolsCard
					name={'Tkinter'}
					desc={
						'Библиотека для Python, используемая для получения файлов из Windows.'
					}
				/>
			</div>
		</div>
	)
}

export default Tools
