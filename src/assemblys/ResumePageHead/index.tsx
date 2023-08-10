import TableListIcons from "@/components/tableListIcons";
import { MPopover, MBorder } from "shuimo-ui";

const ResumePageHead = () => {
  return (
    <>
      <div
        un-fic
        gap-2
        mt-5
      >
        <MPopover>
          {{
            default: () => (
              <div
                text-5
                i-fluent-mdl2:education
              />
            ),
            content: () => <MBorder><TableListIcons/></MBorder>,
          }}
        </MPopover>
        <h3 m-0>教育背景</h3>
      </div>
      <hr />
    </>
  );
};

export default ResumePageHead;
