import { useParams, Link } from "react-router-dom"

const EvntDetailPage = (props) => {
	const params = useParams()
	return (
		<>
			<h1>Event Detail Page</h1>
			<p>{params.title}</p>
			<Link to='..' relative='path'>
				Back
			</Link>
		</>
	)
}

export default EvntDetailPage
