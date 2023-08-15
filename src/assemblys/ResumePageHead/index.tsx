import TableListIcons from "@/components/TableListIcons";
import TextSuInput from "@/components/TextSuInput";
import { MPopover, MBorder, MInput } from "shuimo-ui";
import { defineComponent, h, nextTick, ref } from "vue";

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
          <TextSuInput textDom="h3" />
        </div>
        <hr />
      </>
    );
  },
});

export default ResumePageHead;
