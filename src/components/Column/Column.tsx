import { dateTransform } from "../../utils/dateTransform";

interface Issue {
  id: number;
  node_id: string;
  title: string;
  assignee: null;
  assignees: [];
  created_at: Date;
  closed_at: null;
}

interface ColumnProps {
  issues?: Issue[];
}

const Column = ({ issues }: ColumnProps) => {
   
  if (!issues || issues.length === 0) {
    return <div>No issues found.</div>;
  }

  const renderIssues = () => {
    return issues.map((issue) => {
      const date = dateTransform(issue.created_at);

      return (
        <div
          key={issue.id}
          className="bg-white rounded p-3 mb-3 shadow-md issue"
        >
          <h4>{issue.title}</h4>
          <p>{date}</p>
        </div>
      );
    });
  };

  const renderedIssues = renderIssues();

  return <div>{renderedIssues}</div>;
};

export default Column;