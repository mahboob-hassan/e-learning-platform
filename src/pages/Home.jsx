import AnimatedText from "@/components/ui/animated-text";
import instructorImage from "../assets/images/Instructor_image.png";

function Home() {
  return (
    <section className="min-h-[80vh] px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
        {/* Left - Hero Content */}
        <div className="text-center md:text-left">
          <h1 className="mb-4 font-serif text-3xl leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <AnimatedText
              text="Learn new skills, anytime,"
              animationType="letters"
              staggerDelay={0.04}
              duration={1}
            />

            <AnimatedText
              text="anywhere"
              animationType="letters"
              staggerDelay={0.04}
              duration={1}
            />
          </h1>

          <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-gray-600 sm:mb-8 sm:text-lg md:mx-0">
            Explore hundreds of courses taught by industry experts and grow your
            career at your own pace.
          </p>

          <button className="rounded-full bg-pink-600 px-6 py-3 text-base font-serif text-white transition-colors hover:bg-pink-700 sm:text-lg">
            Browse Courses
          </button>
        </div>

        {/* Right - Instructor Image */}
        <div className="flex justify-center">
          <img
            src={instructorImage}
            alt="GeniusMind Academy instructor"
            className="w-full max-w-xs rounded-3xl object-cover shadow-xl sm:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
