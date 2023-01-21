import { json, useRouteLoaderData } from "react-router-dom"

import EventItem from "../components/EventItem"

const EvntDetailPage = (props) => {
	const data = useRouteLoaderData("event-detail")
	return <EventItem event={data.event} />
}

export default EvntDetailPage

export const loader = async ({ params }) => {
	const id = params.eventId
	const response = await fetch("http://localhost:8080/events/" + id)
	console.log(response)

	if (!response.ok) {
		throw json(
			{ message: "Could not fetch details for selected event." },
			{ status: 500 }
		)
	} else {
		return response
	}
}
