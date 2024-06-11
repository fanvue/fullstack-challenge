import { Paper, Typography } from "@mui/material";

const Comments = ({
  className = "",
  comments,
  onClose,
}: {
  className?: string;
  comments: { id: string; email: string; name: string; body: string }[];
  onClose?: () => void;
}) => {
  return (
    // @TODO add tailwind, tailwind-merge & extend this
    <div className={className}>
      {comments.map((c) => (
        <Paper
          key={c.id}
          style={{
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <Typography variant="body1" style={{ marginBottom: "8px" }}>
            {c.body}
          </Typography>
          <div>
            <Typography variant="subtitle2" style={{ marginRight: "8px" }}>
              Author
            </Typography>
            <Typography variant="body2">
              {c.name} - {c.email}
            </Typography>
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default Comments;
