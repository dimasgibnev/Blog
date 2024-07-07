import { setPostData } from './set-post-data';

export const addCommentsAsync = (requestServer, postId, userId, content) => (dispatch) => {
	requestServer('addPostComment', postId, userId, content).then((postData) => {
		dispatch(setPostData(postData.res));
	});
};
