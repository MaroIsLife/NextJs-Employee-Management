export default function Success ({message})
{
	return (
		<div className="success container mx-auto">
			<div className="flex justify-center mx-auto border border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 text-md my-4 py-2 text-cen
			 bg-opacity-5">
				{message} Added
			</div>
		</div>
	)
}