import TextSuInput from "@/components/TextSuInput";
import TableListIcons from "@/components/TableListIcons";
import { MPopover, MBorder } from "shuimo-ui";
import { defineComponent, h, ref } from "vue";

const ResumePageHead = defineComponent({
  setup() {
    const iconName = ref("info");

    const chooseIcon = (icon: string) => iconName.value = icon;

    return () => (
      <>
        <div
          un-fic
          gap-2
          mt-5
        >
          <MPopover>
            {{
              default: () =>
                h("div", {
                  class: `i-fluent-mdl2:${iconName.value} w-8 h-8`,
                }),
              content: () => <MBorder> <TableListIcons onChooseIcon={chooseIcon} /></MBorder>,
            }}
          </MPopover>
          <TextSuInput />
        </div>
        <hr />
      </>
    );
  },
});

export default ResumePageHead;
