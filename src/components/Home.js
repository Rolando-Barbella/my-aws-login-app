import React from 'react'
import Auth from '@aws-amplify/auth';
import { Link } from "react-router-dom";
import Banner from './common/Banner';

const Home = () => {
  let signOut = async() => {
    await Auth.signOut();
    console.log("Sign out succesfully")
  }
  return (
    <div>
      <Banner
        subHeading="Launch Tracker"
        heading="Don't Miss a Launch"
        description="Launch tracker keeps you up to date on the latest launches."
        />
      <h2 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-lg text-gray-900">
        Home page
      </h2>
      <div className="ml-3 text-base">
        <Link
          to={{
            pathname: '/log-in',
          }}
          onClick={signOut}
          className="pt-2 text-sm text-gray-500 hover:text-gray-600"
        >
          Log out
        </Link>
      </div>
    </div>
  )
}
// ixycfqdzwgtuomvfzm@wqcefp.com
export default Home
