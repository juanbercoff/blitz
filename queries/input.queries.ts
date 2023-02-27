import BormClient from '@blitznocode/blitz-orm';

const ENTITY_NAME = 'input';

export async function createInput(
	client: BormClient,
	payload: { title?: string }
) {
	const { title } = payload;

	return await client.mutate({
		$entity: ENTITY_NAME,
		title,
	});
}

export async function getInputById(
	client: BormClient,
	payload: { id: string }
) {
	const { id } = payload;

	return await client.query({
		$entity: ENTITY_NAME,
		$id: id,
	});
}

export async function getInputs(client: BormClient) {
	return await client.query({
		$entity: ENTITY_NAME,
	});
}
