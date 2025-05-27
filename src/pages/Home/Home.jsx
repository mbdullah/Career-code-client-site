import { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";


const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json())

const Home = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={'Jobs data loading....'}>
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
