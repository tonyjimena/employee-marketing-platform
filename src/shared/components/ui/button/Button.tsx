import "./styles.scss"

export function Button({
	children,
	className,
	...props
}: {
	children: React.ReactNode
	className?: string
	[
		key: string
	]: React.ButtonHTMLAttributes<HTMLButtonElement>[keyof React.ButtonHTMLAttributes<HTMLButtonElement>]
}) {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	)
}
