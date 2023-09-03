import { SessionProvider } from 'next-auth/react'

export const WithSession = (component: FC) => (props) => {
	return <SessionProvider session={props.session}>{component(props)}</SessionProvider>
}
