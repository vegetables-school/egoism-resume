import Introduce from "@/pages/resume/blocks/introduce";
import Educational from "@/pages/resume/blocks/educational";
import Skills from "@/pages/resume/blocks/skills";
import Experiences from "@/pages/resume/blocks/experiences";
import Oss from "@/pages/resume/blocks/oss";
import { defineComponent } from "vue";

const Resume = defineComponent({
  name: "Resume",
  setup() {
    return () => (
      <>
        <div
          class="origin inset-x-0 ma mb-20 max-w-5xl p-8 backdrop-blur trans-ease"
          uno-b="b-1 solid gray-300 dark:b-gray-500"
        >
          <Introduce />
          <Educational />
          <Skills />
          <Experiences />
          <Oss />
        </div>
      </>
    );
  },
});

export default Resume;
