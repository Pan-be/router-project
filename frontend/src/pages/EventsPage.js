import { Link } from "react-router-dom"
const EVENTS = [
	{ title: "birthday" },
	{ title: "wedding" },
	{ title: "vacations" },
]

const EventsPage = (props) => {
	return (
		<>
			<h1>Events Page</h1>
			<ul>
				{EVENTS.map((ev) => (
					<li key={ev.title}>
						<Link to={ev.title}>{ev.title}</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default EventsPage
