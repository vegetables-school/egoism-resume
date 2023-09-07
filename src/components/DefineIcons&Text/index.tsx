import TextSuInput from "@/components/TextSuInput";
import TableListIcons from "@/components/TableListIcons";
import { MPopover, MBorder } from "shuimo-ui";
import { defineComponent, h, ref } from "vue";

const DefineIconsText = defineComponent({
  name: "DefineIconsText",
  props: {
    iconSize: {
      type: Number,
      default: 4,
    },
  },
  setup(props) {
    const iconName = ref("info");
    const iconSize = ref(props.iconSize);

    const chooseIcon = (icon: string) => iconName.value = icon;

    const changeIconSize = (size: number) => {
      if (iconSize.value > 1 && iconSize.value < 6) {
        iconSize.value = iconSize.value + size;
        return;
      }
      if (iconSize.value < 2 && size > 0) {
        iconSize.value = iconSize.value + size;
        return;
      }
      if (iconSize.value > 5 && size < 0) {
        iconSize.value = iconSize.value + size;
        return;
      }


    };

    return () => (
      <>
        <div
          un-fic
          gap-2
        >  
          <MPopover>
            {{
              default: () =>
                h("div", {
                  class: `i-fluent-mdl2:${iconName.value} text-${iconSize.value}`,
                }),
              content: () => <MBorder> <TableListIcons onChooseIcon={chooseIcon} onChangeIconSize={changeIconSize} /></MBorder>,
            }}
          </MPopover>
          <TextSuInput />
        </div>
      </>
    );
  },
});

export default DefineIconsText;
