import { useRouteError } from "react-router-dom"

import PageContent from "../components/PageContent"

const ErrorPage = (props) => {
	const error = useRouteError()
	return (
		<PageContent title='an arror occurred'>
			<p>Something went wrong.</p>
		</PageContent>
	)
}

export default ErrorPage
