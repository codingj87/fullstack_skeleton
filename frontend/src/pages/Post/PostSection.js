import ImageCard from "components/card/ImageCard";
import { gql, useQuery } from "@apollo/client";

const GET_POST_lIST = gql`
  query {
    getPostList {
      result
      objects {
        id
        title
        contents
        image
        writer
        ctime
      }
    }
  }
`;

export default function PostSection() {
  const { loading, error, data } = useQuery(GET_POST_lIST);

  console.log(data);

  return (
    <section className="pb-20 bg-gray-200 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center mt-32">
          {data?.getPostList?.objects?.map((post) => (
            <ImageCard key={post.id} title={post.title} imageUrl={post.image}>
              {post.contents}
            </ImageCard>
          ))}
        </div>
      </div>
    </section>
  );
}
