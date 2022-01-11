import DefaultNavbar from "components/navigation/DefaultNavbar";
import PostSection from "../Post/PostSection";
export default function Home() {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <PostSection />
      </main>
    </>
  );
}
