import { useRouteLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm"

const EditEventPage = (props) => {
	const data = useRouteLoaderData("event-detail")
	const event = data.event
	return <EventForm event={event} method='patch' />
}

export default EditEventPage
