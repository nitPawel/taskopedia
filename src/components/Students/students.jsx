

const Student = props => {
	return (
		<div className='col-4 p-1'>
			<div className='row border'>
				<div className='col-2'>
					<img
						src={props.headshot}
						className='w-100 py-2'
						alt='awatar'
					></img>
				</div>
				<div className='col-8 py-3'>
					{props.name}
					<br />
					Doświadczenie w kodowaniu {props.experience} lat.
				</div>
        <div className="col-2">{props.children}</div>
			</div>
		</div>
	);
};
export default Student;
