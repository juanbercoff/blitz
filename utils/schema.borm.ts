import { BormSchema, DataField } from '@blitznocode/blitz-orm';
import { v4 as uuidv4 } from 'uuid';

export const id: DataField = {
	shared: true,
	path: 'id',
	cardinality: 'ONE',
	default: { type: 'function', value: () => uuidv4() },
	validations: { required: true, unique: true },
	contentType: 'ID',
	rights: ['CREATE'],
};

export const schema: BormSchema = {
	entities: {
		block: {
			idFields: ['id'],
			defaultDBConnector: { id: 'default' },
			linkFields: [
				{
					path: 'parent',
					cardinality: 'MANY',
					plays: 'child',
					relation: 'parenthood',
					target: 'role',
				},
				{
					path: 'child',
					cardinality: 'ONE',
					plays: 'parent',
					relation: 'parenthood',
					target: 'role',
				},
			],
			dataFields: [
				{ ...id },
				{
					shared: true,
					path: 'title',
					cardinality: 'ONE',
					contentType: 'TEXT',
					rights: ['CREATE', 'UPDATE'],
				},
			],
		},
		input: {
			extends: 'block',
			defaultDBConnector: { id: 'default' },
			dataFields: [
				{ ...id },
				{
					shared: true,
					path: 'input-value',
					cardinality: 'ONE',
					contentType: 'TEXT',
					rights: ['CREATE', 'UPDATE'],
				},
			],
		},
		page: {
			extends: 'block',
			defaultDBConnector: { id: 'default' },
			dataFields: [{ ...id }],
		},
	},
	relations: {
		parenthood: {
			idFields: ['id'],
			dataFields: [{ ...id }],
			defaultDBConnector: { id: 'default', path: 'parenthood' },
			roles: {
				child: { cardinality: 'MANY' },
				parent: { cardinality: 'ONE' },
			},
		},
	},
};
