import { addComment, getPost } from '../api';

export const addPostComment = async (postId, userId, content) => {
	await addComment(postId, userId, content);

	const post = await getPost(postId);

	return {
		error: null,
		res: post
	};
};
