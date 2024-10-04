import { useList } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const PostList = ({ categoryId }: { categoryId?: number }) => {
  const { data, isLoading } = useList({
    resource: "blog_posts",
    pagination: { mode: "off" },
    filters: [
      {
        field: "categoryId",
        operator: "eq",
        value: categoryId,
      },
    ],
  });

  return (
    <div style={{ marginTop: "50px" }}>
      <Title level={5}>{"Titles"}</Title>
      {!isLoading &&
        data?.data.map((post, idx) => <div key={idx}>{post?.title}</div>)}
    </div>
  );
};
