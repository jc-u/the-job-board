const Jobs = (props) => {
	return (
		<Job
			className={props.className}
			title={props.title}
			contracttype={props.contracttype}
			country={props.country}
			city={props.city}
		/>
	);
};

export default Jobs;
