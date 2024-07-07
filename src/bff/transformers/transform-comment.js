export const transformComment = (dbComment) => {
	return {
		id: dbComment.id,
		author: dbComment.author,
		authorId: dbComment.author_id,
		postId: dbComment.post_id,
		content: dbComment.content,
		publishedAt: dbComment.published_at,
	}
}