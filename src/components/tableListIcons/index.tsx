import {
  icons as fluentMdl2Icons,
  info as fluentMdl2Info,
} from "@iconify-json/fluent-mdl2";
import { MInput, MButton, MPagination } from "shuimo-ui";
import { defineComponent, h, ref, watch } from "vue";
import "./index.scss";

const TableListIcons = defineComponent({
  emits: ["chooseIcon","changeIconSize"],
  setup(_, { emit }) {
    // icons 集合
    const icons = Object.keys(fluentMdl2Icons.icons);
    const currentIconsList = ref(icons);

    // icons 总数
    const currentIconsTotal = ref(fluentMdl2Info.total);
    const currentPage = ref(1);
    const inputValue = ref("");
    // 当前显示的 icons
    const iconsCurrentList = ref(icons.slice(0, 35));

    watch(currentPage, (count) => {
      const start = (count - 1) * 35;
      const end = count * 35;
      iconsCurrentList.value = currentIconsList.value.slice(start, end);
    });

    watch(
      currentIconsList,
      () => {
        currentPage.value = 1;
        iconsCurrentList.value = currentIconsList.value.slice(0, 35);
        console.log(currentIconsList.value);
      },
      { deep: true },
    );

    const searchIcon = () => {
      const searchIcons = icons.filter((iconName) =>
        iconName.includes(inputValue.value),
      );
      currentIconsTotal.value = searchIcons.length;
      currentIconsList.value = searchIcons;
    };

    return () => (
      <div
        w-90
        h-60
        class="table-list-icons"
      >
        <div class="flex pr">
          <MInput modelValue={inputValue.value} onUpdate: modelValue={(val: string) => (inputValue.value = val)} />
          <div i-fluent-mdl2:font-decrease text-6 active:color-cyan-500 onClick={()=>emit("changeIconSize", -1)}/>
          <div i-fluent-mdl2:font-increase text-6 active:color-orange-500 onClick={()=>emit("changeIconSize", 1)}/>
          <MButton onClick={searchIcon}>搜索</MButton>
        </div>

        {iconsCurrentList.value.map((iconName: string) => {
          return h("i", {
            class: `i-fluent-mdl2:${iconName} w-8 h-8 m-1 table-icon-item`,
            onClick: () => emit("chooseIcon", iconName),
          });
        })}

        <MPagination total={currentIconsTotal.value}
          modelValue={currentPage.value}
          onUpdate: modelValue={(val: number) => currentPage.value = val}
          class="pa bottom-0" />
      </div>
    );
  },
});

export default TableListIcons;
