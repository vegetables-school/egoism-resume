import Introduce from "@/pages/resume/blocks/introduce"
import Educational from "@/pages/resume/blocks/educational"
import Skills from "@/pages/resume/blocks/skills"
import Experiences from "@/pages/resume/blocks/experiences"
import Oss from "@/pages/resume/blocks/oss"

const Resume = () => {
  return <>
    <div className="inset-x-0 trans-ease backdrop-blur max-w-5xl p-8 ma origin mb-20" b="b-1 solid gray-300 dark:b-gray-500">
      <Introduce />
      <Educational />
      <Skills/>
      <Experiences/>
      <Oss/>
    </div>

  </>
}

export default Resume