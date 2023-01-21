import { useRouteError } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

import PageContent from "../components/PageContent"

const ErrorPage = (props) => {
	const error = useRouteError()

	const errorDet = {
		title: "an error occurred.",
		message: "Something went wrong.",
	}

	// let title = "an error occurred."
	// let message = "Something went wrong."

	if (error.status === 500) {
		errorDet.message = error.data.message
	}
	if (error.status === 404) {
		errorDet.title = "Not found."
		errorDet.message = "Could not find resource or page."
	}
	return (
		<>
			<MainNavigation />
			<PageContent title={errorDet.title}>
				<p>{errorDet.message}</p>
			</PageContent>
		</>
	)
}

export default ErrorPage
