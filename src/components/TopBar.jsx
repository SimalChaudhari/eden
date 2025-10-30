import { HiOutlineArrowLeft } from 'react-icons/hi'

export default function TopBar({ percent = 15, onBack }) {
	return (
		<div className="mb-6 flex items-center gap-3">

			<button type="button" aria-label="Back" onClick={onBack} className="p-2 rounded-full hover:bg-tertiary">
				<HiOutlineArrowLeft className="w-5 h-5" />
			</button>
			<div className="flex-1 h-3 rounded-full bg-primaryBack overflow-hidden">
				<div className="h-full bg-primary rounded-full" style={{ width: `${percent}%` }} />
			</div>

			<span className="text-sm text-text-muted">{percent}%</span>
		</div>
	)
}


