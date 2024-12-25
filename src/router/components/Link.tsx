import {useRouter} from "../hooks/useRouter"

export function Link({
	href,
	className,
	children
}: {
	href: string
	className?: string
	children: React.ReactNode
}) {
	const {navigate} = useRouter()

	return (
		<a
			className={className}
			href={href}
			onClick={(e) => {
				e.preventDefault()
				navigate(href)
			}}
		>
			{children}
		</a>
	)
}
