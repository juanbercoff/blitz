import BormClient from '@blitznocode/blitz-orm';

import { schema } from './schema.borm';

const bormClient = new BormClient({
	schema,
	config: {
		server: {
			provider: 'blitz-orm-js',
		},
		dbConnectors: [
			{
				id: 'default',
				provider: 'typeDB',
				dbName: 'blitz',
				url: 'localhost:1729',
			},
		],
	},
});

export default bormClient;
