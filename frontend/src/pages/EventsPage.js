import { Suspense } from "react"
import { json, useLoaderData, defer, Await } from "react-router-dom"
import EventsList from "../components/EventsList"

const EventsPage = (props) => {
	const { events } = useLoaderData()

	return (
		<Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
			<Await resolve={events}>
				{(loadedEvents) => <EventsList events={loadedEvents} />}
			</Await>
		</Suspense>
	)
}

export default EventsPage

const loadEvents = async () => {
	const response = await fetch("http://localhost:8080/events")

	if (!response.ok) {
		throw json({ message: "Could not fetch events." }, { status: 500 })
	} else {
		const resData = await response.json()
		return resData.events
	}
}

export const loader = () => {
	return defer({
		events: loadEvents(),
	})
}
