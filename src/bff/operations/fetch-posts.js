import { getPosts, getComments } from '../api';
import { getCommentsCount } from '../utils';

export const fetchPosts = async (page, limit) => {
	const [{ posts, lastPage }, comments] = await Promise.all([
		getPosts(page, limit),
		getComments(),
	]);

	const postsWithComments = posts.map((post) => ({
		...post,
		commentsCount: getCommentsCount(comments, post.id),
	}));

	return {
		error: null,
		res: {
			posts: postsWithComments,
			lastPage,
		},
	};
};
