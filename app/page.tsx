import bormClient from '@/utils/blitz-orm';

export default async function Home() {
	const res = await bormClient.query({
		$relation: 'parenthood',
		$id: '5f58ac19-9f38-4e15-9dd8-7633725a0e41',
		$fields: ['id', { $path: 'parent', $fields: ['title'] }],
	});
	console.log(res);
	/* Returns:
	[
		{
			'$relation': 'parenthood',
			'$id': '5f58ac19-9f38-4e15-9dd8-7633725a0e41',
			id: '5f58ac19-9f38-4e15-9dd8-7633725a0e41',
			parent: { '$entity': 'block', '$id': '92279ee0-913e-4ba8-8cf5-cfdba6cb1b25' }
		}
	] 
	Even though the parent entity of relationship 92279ee0-913e-4ba8-8cf5-cfdba6cb1b28 is a 'page'
	*/

	return <div></div>;
}
