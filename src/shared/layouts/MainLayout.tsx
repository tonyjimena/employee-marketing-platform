import {Content} from "@/ui/content"
import {Footer} from "@/ui/footer"
import {Header} from "@/ui/header"

export function MainLayout({children}: {children: React.ReactNode}) {
	return (
		<div className="main-layout">
			<Header />
			<Content>{children}</Content>
			<Footer />
		</div>
	)
}
