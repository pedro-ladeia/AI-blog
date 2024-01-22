'use client'
import Tech from "./(home)/Tech";
import Travel from "./(home)/Travel";
import Trending from "./(home)/Trending";
import Other from "./(shared)/Other";
import Sidebar from "./(shared)/Sidebar";
import Subscribe from "./(shared)/Subscribe";
import { PostInterface } from "./(useQuery)/PostInterface";
import { usePost } from "./(useQuery)/usePost";
import Loading from "./loading";

export default function Home() {

  const {data, isLoading, isError} = usePost();
  !isLoading && console.log(data);
  const formatPosts= () => {
      const trendingPosts:Array<PostInterface> = [];
      const techPosts:Array<PostInterface> = [];
      const travelPosts:Array<PostInterface> = [];
      const otherPosts:Array<PostInterface> = [];
      if (!isLoading) { 
        data.forEach((post:PostInterface, i:number) => {
          if(i < 4) trendingPosts.push(post);
          else if (post.category === 'Tech') techPosts.push(post);
          else if (post.category === 'Travel') travelPosts.push(post);
          else if (post.category === 'Interior Design') otherPosts.push(post);
        })
      }
      return [trendingPosts, techPosts, travelPosts, otherPosts];
    }

    const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts()


 
  return (
    <main className="px-10 leading-7">
      <Trending trendingPosts={trendingPosts} />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">

          <Tech />
          <Travel />
          <Other />
          
          <div className="hidden md:block">
            <Subscribe />
          </div>
        
        </div>

        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}
