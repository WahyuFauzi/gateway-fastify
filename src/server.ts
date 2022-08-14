import fastify from './App/App';
const port = parseInt(process.env.PORT || '');
// start gateway
const start = async () => {
	try {
		await fastify
			.listen({ port: port })
			.then(() => console.log(`listening on port: ${port}`));
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

start();
