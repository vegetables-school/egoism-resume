import TableListIcons from "@/components/tableListIcons";
import { MPopover, MBorder, MInput } from "shuimo-ui";
import { defineComponent, h, nextTick, ref } from "vue";

const ResumePageHead = defineComponent({
  setup() {
    const iconName = ref("info");
    const refInput = ref();
    const inputIsShow = ref(false);
    const inputValue = ref('标题');

    const chooseIcon = (icon: string) => iconName.value = icon;

    const changeToInput = () => {
      inputIsShow.value = true;
      nextTick(() => {
        refInput.value?.$el.children[0].children[0].focus()
      })
    }

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
          {inputIsShow.value ?
            <MInput ref={refInput} modelValue={inputValue.value}
              onUpdate: modelValue={(val: string) => (inputValue.value = val)}
              onBlur={() => inputIsShow.value = false}
              type="text" /> :
            <h3 onClick={changeToInput} m-0>{inputValue.value}</h3>}
        </div>
        <hr />
      </>
    );
  },
});

export default ResumePageHead;
