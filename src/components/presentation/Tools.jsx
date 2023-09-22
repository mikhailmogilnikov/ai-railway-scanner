import ToolsCard from './ToolsCard'
import Yolo from '../../resources/images/yolo.png'
import ROS2 from '../../resources/images/ros2.png'
import Python from '../../resources/images/4e105f96750899.5eb54f337fb8e.png'
import WSL from '../../resources/images/wsl.jpg'

const Tools = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Инструменты</h2>

			<div className='problem-wrapper'>
				<ToolsCard
					name={'YOLOv4'}
					desc={
						'Быстрая и точная real-time нейросеть.'
					}
					img={Yolo}
				/>
					<ToolsCard
					name={'ROS2'}
					desc={
						'Набор инструментов для робототехники.'
					}
					img={ROS2}
				/>
				<ToolsCard
					name={'Python'}
					desc={
						'Язык программирования.'
					}
					img={Python}
				/>
				<ToolsCard
					name={'WSL'}
					desc={
						'Linux внутри Windows.'
					}
					img={WSL}
				/>
			</div>
		</div>
	)
}

export default Tools
