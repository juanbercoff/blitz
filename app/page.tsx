import bormClient from '@/utils/blitz-orm';

export default async function Home() {
	const res = await bormClient.query({
		$relation: 'parenthood',
		$fields: ['id', { $path: 'parent', $fields: ['title'] }],
	});
	/* Returns:
	[
		{
			'$relation': 'parenthood',
			'$id': '92279ee0-913e-4ba8-8cf5-cfdba6cb1b28',
			id: '92279ee0-913e-4ba8-8cf5-cfdba6cb1b28',
			parent: {
				'$entity': 'block',
				'$id': '92279ee0-913e-4ba8-8cf5-cfdba6cb1b27'
			}
		}
	] 
	Even though the parent entity of relationship 92279ee0-913e-4ba8-8cf5-cfdba6cb1b28 is a 'page'
	*/

	return <div></div>;
}
