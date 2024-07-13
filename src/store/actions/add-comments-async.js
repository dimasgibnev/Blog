import { setPostData } from './set-post-data';

export const addCommentsAsync = (requestServer, postId, userId, content, login) => (dispatch) => {
	requestServer('addPostComment', postId, userId, content, login).then((postData) => {
		dispatch(setPostData(postData.res));
	});
};
