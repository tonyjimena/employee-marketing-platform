import {Content} from "@/src/shared/components/ui/content/Content"
import {Footer} from "@/src/shared/components/ui/footer/Footer"
import {Header} from "@/src/shared/components/ui/header/Header"

export function MainLayout({children}: {children: React.ReactNode}) {
	return (
		<div className="main-layout">
			<Header />
			<Content>{children}</Content>
			<Footer />
		</div>
	)
}
