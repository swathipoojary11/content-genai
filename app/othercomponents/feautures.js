"use client" 
export default function FeatureSection({title,descrption,alignRight}){
    return(
        <div className="flex flex-col text-white mt-[150px] border-2 rounded-2xl border-purple-500 p-4 flex-wrap w-1/2">
        <div className="  text-purple-500 mt-10 text-3xl font-bold ">
          KINETIC ENGINE
        </div>
        <div className="text-lg mt-5 font-medium text-justify ">
          The K represents the Kinetic Engine, the high-velocity heartbeat of
          the KRISP architecture designed to transform static thoughts into
          unstoppable digital momentum. In an era where trends die in minutes,
          the Kinetic Engine operates at the speed of the now. The moment you
          feed the system a single prompt, our AI triggers a proprietary chain
          reaction, scraping real-time cultural data, trending audio, and viral
          visual cues to ensure your content isn't just produced—it is
          biologically alive within the algorithm. It is about aggressive speed
          and raw energy; while your competitors are still stuck in the friction
          of the drafting phase, the Kinetic Engine has already simulated three
          steps ahead, pre-rendering your media for maximum psychological
          impact. It functions as a digital adrenaline shot to your creative
          workflow, ensuring that your first mover advantage is mathematically
          guaranteed. By the time the world wakes up to a new trend, your
          Kinetic-powered assets are already dominating the feed. This is the
          death of hesitation and the birth of instant relevance.
        </div>
      </div>
      

    //     <div className={`flex flex-col text-white mt-[150px] border-2 rounded-2xl border-purple-500 p-4 flex-wrap w-1/2  ${alignRight ? "ml-auto" : ""}`} >
    //     <div className="  text-purple-500 mt-10 text-3xl font-bold ">
    //      {title}
    //     </div>
    //     <div className="text-lg mt-5 font-medium text-justify ">
    //       {description}
    //     </div>
    //   </div>
    );
} 