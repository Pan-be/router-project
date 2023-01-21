import { useLoaderData } from "react-router-dom"
import EventsList from "../components/EventsList"

const EventsPage = (props) => {
	const data = useLoaderData()

	const events = data.events

	return <EventsList events={events} />
}

export default EventsPage

export const loader = async () => {
	const response = await fetch("http://localhost:8080/eventss")

	if (!response.ok) {
		throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
			status: 500,
		})
	} else {
		return response
	}
}
