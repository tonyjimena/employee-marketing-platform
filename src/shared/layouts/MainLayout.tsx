import {Content} from "../components/Content"
import {Footer} from "../components/Footer"
import {Header} from "../components/Header"

export function MainLayout({children}: {children: React.ReactNode}) {
	return (
		<div className="flex column gap-2">
			<Header />
			<Content>{children}</Content>
			<Footer />
		</div>
	)
}
