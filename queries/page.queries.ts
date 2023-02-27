import BormClient from '@blitznocode/blitz-orm';

const ENTITY_NAME = 'page';

export async function createPage(
	client: BormClient,
	payload: { title?: string }
) {
	const { title } = payload;

	return await client.mutate({
		$entity: ENTITY_NAME,
		title,
	});
}

export async function getPageChildren(
	client: BormClient,
	payload: { id: string }
) {
	const { id } = payload;

	return await client.query({
		$entity: ENTITY_NAME,
		$id: id,
	});
}

export async function getPages(client: BormClient) {
	return await client.query({
		$entity: ENTITY_NAME,
	});
}
