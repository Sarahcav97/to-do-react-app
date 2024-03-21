function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}
const getColor = (urgency) => {
	switch (urgency) {
		case 'normal':
			return 'bg-yellow-600';
		case 'medium':
			return 'bg-indigo-600';
		case 'high':
			return 'bg-red-600';
		default:
			return 'bg-gray-600';
	}
};
export default function Item({ item }) {
	const handleDelete = async (id) => {
		alert('delete', id);
	};
	return (
		<div>
			<div className='col-span-1 flex rounded-md shadow-sm '>
				<div
					className={classNames(
						getColor(item.urgency),
						'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
					)}
				>
					{item.urgency}
				</div>
				<div className='flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white'>
					<div className='flex-1 truncate px-4 py-2 test-sm'>{item.todo}</div>
					<button className='mr-3 hover:bg-gray-100 px-2 py-1'>x</button>
				</div>
			</div>
		</div>
	);
}
