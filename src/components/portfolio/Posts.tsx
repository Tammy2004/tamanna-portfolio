import { getPosts } from "@/app/utils/utils";
import { Grid } from "@/once-ui/components";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
}

export function Posts({ range, columns = "1", thumbnail = false }: PostsProps) {
  let allportfolios = getPosts(["src", "app", "portfolio", "posts"]);

  const sortedportfolios = allportfolios.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedportfolios = range
    ? sortedportfolios.slice(range[0] - 1, range.length === 2 ? range[1] : sortedportfolios.length)
    : sortedportfolios;

  return (
    <>
      {displayedportfolios.length > 0 && (
        <Grid columns={columns} mobileColumns="1" fillWidth marginBottom="40" gap="m">
          {displayedportfolios.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} />
          ))}
        </Grid>
      )}
    </>
  );
}
