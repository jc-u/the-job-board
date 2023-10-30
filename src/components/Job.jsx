const Job = (props) => {
	return (
		<div className={props.className}>
			<h2>{props.title}</h2>
			<div className="contract-details">
				<p>
					{props.contracttype}
					<span>-</span>
				</p>{" "}
				<p>
					{props.country}
					<span>-</span>
				</p>
				<p>{props.city}</p>
			</div>
		</div>
	);
};

export default Job;
