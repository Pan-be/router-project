import { Outlet } from "react-router-dom"
import EventsNavigation from "../components/EventsNavigation"

const EventsRoot = (props) => {
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	)
}

export default EventsRoot
