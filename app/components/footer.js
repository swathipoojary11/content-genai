"use client";
export default function Footer(){
    return(
        <div className="flex flex-col text-white mt-[150px] max-w-full  justify-evenly bg-purple-800">
        <div className="flex  flex-col md:flex-row text-white md:mt-[160px] max-w-full  justify-evenly">
          <div className="  text-white mt-10 text-lg  ">
            {" "}
            <span className="text-purple-500 mt-10 text-3xl font-bold">
              About
            </span>
            <ul>Why KRISP</ul>
            <ul>About Us</ul>
            <ul>Careers</ul>
            <ul>Leadership</ul>
            <ul>Customers</ul>
            <ul>Contact Us</ul>
          </div>
          <div className="  text-white mt-10 text-lg  ">
            {" "}
            <span className="text-purple-500 mt-10 text-3xl font-bold">
              {" "}
              Product Features
            </span>
            <ul>Publish </ul>
            <ul>Engage</ul>
            <ul>Monitor</ul>
            <ul>Analyse</ul>
          </div>
          <div className="  text-white mt-10 text-lg  ">
            <span className="text-purple-500 mt-10 text-3xl font-bold">
              {" "}
              Guides
            </span>

            <ul>Blog</ul>
            <ul>Help Center</ul>
            <ul>Community</ul>
            <ul>Events</ul>
            <ul>Security</ul>
            <ul>Privacy</ul>
            <ul>Social media marketing </ul>
            <ul>Autopost</ul>
            <ul>Content Strategy</ul>
            <ul>Content Creation</ul>
            <ul>Content Distribution</ul>
            <ul>Content Analytics</ul>
          </div>
          <div className="  text-white mt-10 text-lg  ">
            <span className="text-purple-500 mt-10 text-3xl font-bold">
              {" "}
              Resources
            </span>
            <ul>Documentation</ul>
            <ul>API Reference</ul>
            <ul>Developer Tools</ul>
            <ul>System Status</ul>
            <ul>Release Notes</ul>
            <ul>Support</ul>
            <ul>Contact Support</ul>
            <ul>Report a Bug</ul>
            <ul>Request a Feature</ul>
          </div>
        </div>
        <div className="flex  bg-purple-950 px-4 py-2 justify-center ">
          <div>© 2026 Hootsuite Inc. All Rights Reserved.</div>
        </div>
      </div>
    )
}