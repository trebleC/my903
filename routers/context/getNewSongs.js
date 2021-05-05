const { getNewSongs } = require('../../module');

module.exports = async (ctx, next) => {
	const props = {
		method: 'post',
		params: {
            page: 0,
            profile_id: '903NewSongs',
            post_type: 0,
        },
		option: {},
	};
	const { status, body } = await getNewSongs(props);
	Object.assign(ctx, {
		status,
		body,
	});
};
