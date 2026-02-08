"use client";
import { useRouter } from "next/navigation";
import Footer from "./components/footer";
export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-black min-h-screen overflow-x-hidden w-full  ">
      <div className="justify-center items-center flex flex-col ">
        <div className=" p-7 text-white  text-4xl md:text-6xl font-medium">
          {" "}
          Welcome to,<br></br>{" "}
          <span className="text-purple-500 font-extrabold md:text-9xl">KRISP</span>
          <p></p>
        </div>

        {/*Button for login and sign up */}
        <div className=" flex flex-col  justify-center w-full h-auto mt-12 gap-4 items-center">
          <button
            className="bg-purple-500 text-white border-1 border-white rounded-3xl  h-[60px] md:h-[100px] w-full md:w-1/2 p-3 "
            onClick={() => router.push("/signup")}
          >
            Signup
          </button>
          <button
            className="bg-violet-950  text-white border-1 border-white rounded-3xl  h-[60px] md:h-[100px] w-full md:w-1/2 p-3 "
            onClick={() => router.push("/login")}
          >
            Login{" "}
          </button>
        </div>
      </div>
      {/*Discription of KRISP */}
      <div className="flex flex-col text-white mt-[150px]  border-2 rounded-2xl border-purple-500 p-4 flex-wrap w-full md:w-1/2">
        <div className="  text-purple-500 mt-10 text-3xl font-bold  ">
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
      <div className="flex flex-col text-white mt-[150px] border-2 rounded-2xl border-purple-500 p-4 flex-wrap md:w-1/2  md:ml-auto">
        <div className="  text-purple-500 mt-10 text-3xl font-bold ">
          RECURSIVE SYNDICATION
        </div>
        <div className="text-lg mt-5 font-medium text-justify ">
          The R stands for Recursive Syndication, the self-evolving Auto-Post
          brain that governs your digital footprint. This isn't a mere calendar
          or a basic scheduler; it is a sophisticated feedback loop that lives
          and breathes your audience's behavior. It recursively analyzes
          micro-fluctuations in engagement patterns across Instagram, TikTok, X,
          and the emerging decentralized web, autonomously deploying your
          content at the precise breaking point of the digital tide. You define
          the aesthetic vibe once, and the syndication logic takes over the
          cognitive load, managing the heavy lifting of multi-platform
          distribution and ensuring your brand never misses a heartbeat in the
          global conversation. The system learns from every like and every
          share, recalibrating its delivery strategy in real-time without you
          ever lifting a finger. It is the end of the manual upload era,
          replaced by a ghost-writer who never sleeps and a manager who never
          misses a deadline. Your content doesn't just sit on a server; it hunts
          for your audience.
        </div>
      </div>
      <div className="flex flex-col text-white mt-[150px] border-2 rounded-2xl border-purple-500 p-4 flex-wrap md:w-1/2">
        <div className="  text-purple-500 mt-10 text-3xl font-bold ">
          INTELLIGENT SYNTHESIS
        </div>
        <div className="text-lg mt-5 font-medium text-justify ">
          The I is for Intelligent Synthesis, the hyper-creative core where your
          abstract imagination is codified into reality. This is the laboratory
          where your specific brand voice is digitized and scaled. Utilizing
          advanced multimodal Large Language Models and custom diffusion
          architectures, KRISP synthesizes high-fidelity visuals and human-coded
          captions that bypass the uncanny valley of typical AI—nothing here
          sounds like a bot. It creates a seamless bridge between your raw,
          unspoken creative intent and a professional-grade final product,
          guaranteeing that every frame and every syllable generated feels
          authentically tethered to your personal aesthetic and creative DNA.
          This layer acts as a cognitive mirror, reflecting your highest level
          of taste while removing the technical barriers of production. It
          doesn't just generate content; it distills your unique personality
          into a format that the global algorithm can finally understand and
          reward. It is the perfect fusion of your soul and our silicon.
        </div>
      </div>
      <div className="flex flex-col text-white mt-[150px] border-2 rounded-2xl border-purple-500 p-4 flex-wrap md:w-1/2 ml-auto">
        <div className="  text-purple-500 mt-10 text-3xl font-bold ">
          SEAMLESS PIPELINE
        </div>
        <div className="text-lg mt-5 font-medium text-justify ">
          The S defines the Seamless Pipeline, the zero-click philosophy that
          anchors the entire user experience. We have systematically eliminate
          the technical friction and admin work that kills creative flow. Once
          the synthesis is complete, the Pipeline moves your content through an
          automated, multi-point Quality Control check—optimizing aspect ratios,
          bitrate, and metadata—and pushes it directly into the bloodstream of
          your linked social ecosystems. It is a frictionless, end-to-end tunnel
          that takes an idea from the back of your mind to the front of a
          million feeds; no Exporting, no Downloading, and no manual uploading
          required. The Pipeline is the bridge between thought and virality, a
          high-speed transit system for your digital assets. It turns the
          complex logistics of content management into a background process,
          leaving you free to exist in the real world while your digital self
          thrives. You provide the spark, and the pipeline builds the fire
        </div>
      </div>
      <div className="flex flex-col text-white mt-[150px] border-2 rounded-2xl border-purple-500 p-4 flex-wrap md:w-1/2">
        <div className="  text-purple-500 mt-10 text-3xl font-bold ">
          PREDICTIVE PRESENCE
        </div>
        <div className="text-lg mt-5 font-medium text-justify ">
          The P represents Predictive Presence, the final, most powerful stage
          of the KRISP automation cycle. Our system doesn't just post content;
          it predicts the future of its performance. By calculating the Virality
          Potential of every asset generated, the AI autonomously adjusts
          hashtags, alt-text, and deployment windows to ensure you aren't just a
          ghost in the machine—you are dominating the timeline. It manages your
          digital identity 24/7, maintaining a consistent, high-impact presence
          that builds your influence and social capital even while you are
          completely offline. This is the ultimate tool for digital immortality,
          ensuring your brand maintains its edge and authority without requiring
          your constant attention. You are no longer chasing the algorithm; with
          Predictive Presence, the algorithm starts chasing you. Your online
          legacy becomes a self-sustaining entity that grows in your absence.
        </div>
      </div>
      <Footer />
    </div>
  );
}
