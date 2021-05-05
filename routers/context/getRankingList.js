const { getRankingList } = require('../../module');
module.exports = async (ctx, next) => {
	const props = {
		method: 'post',
		params: {
            page: 0,
            profile_id: '903songtable1',
            post_type: 0,
        },
	};
	const { status, body } = await getRankingList(props);
	Object.assign(ctx, {
		status,
		body,
	});
};
