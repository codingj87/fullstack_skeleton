import { Outlet } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Post, { PostPropsType } from "./Post";

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Subtitle = styled.h3`
  font-size: 35px;
`;
const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const PostListComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;
export default function PostList() {
  const { loading, error, data } = useQuery(GET_POST_lIST);
  return (
    <>
      <Container>
        <Header>
          <Title>Codingj87</Title>
          <Subtitle>🤗</Subtitle>
        </Header>
        {loading && <Loading>Loading...</Loading>}
        {error && <div>Error</div>}
        <PostListComponent>
          {data?.getPostList?.objects?.map((post: PostPropsType) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              image={post.image}
            />
          ))}
        </PostListComponent>
      </Container>
      <Outlet />
    </>
  );
}
