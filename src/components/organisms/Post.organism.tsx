import { useState } from "react";
import Comment from "../molecules/Comments.molecule";
import Comments from "../molecules/Comments.molecule";
import { Box, Button, Typography } from "@mui/material";

interface IPost {
  id: number;
  title: string;
  body: string;
  comments: {
    name: string;
    email: string;
    body: string;
    id: number;
  }[];
}

const Post = ({ className, post }: { className?: string; post: IPost }) => {
  const [expandedComment, setExpandedComment] = useState(false);
  const commentsArea = (() => {
    if (expandedComment)
      return (
        <Comments
          comments={post.comments}
          onClose={() => setExpandedComment(false)}
        />
      );

    if (post.comments.length)
      return (
        <Button
          variant="contained"
          onClick={() => setExpandedComment(true)}
          aria-label={`Show comments for ${post.title}`}
        >
          Show {post.comments.length} comments
        </Button>
      );

    return (
      <Typography variant="body1" component="p">
        No comments yet
      </Typography>
    );
  })();
  return (
    <Box
      key={post.id}
      sx={{
        border: "1px solid #ddd",
        padding: 2,
        marginBottom: 2,
        borderRadius: 1,
      }}
      // @TODO add tailwind, tailwind-merge & extend this
      className={className}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        {post.body}
      </Typography>
      {commentsArea}
    </Box>
  );
};

export default Post;
