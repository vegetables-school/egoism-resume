import {
  icons as fluentMdl2Icons,
  info as fluentMdl2Info,
} from "@iconify-json/fluent-mdl2";
import { MInput, MButton, MPagination } from "shuimo-ui";
import { defineComponent, h, ref, watch } from "vue";
import "./index.scss";

const TableListIcons = defineComponent({
  emits: ["chooseIcon"],
  setup(_, { emit }) {
    const icons = Object.keys(fluentMdl2Icons.icons);
    const iconsTotal = fluentMdl2Info.total;
    const currentIconsTotal = ref(iconsTotal);
    const currentPage = ref(1);
    const inputValue = ref("");
    const currentIconsList = ref(icons);
    const iconsTableList = ref(icons.slice(0, 35));

    watch(currentPage, (count) => {
      const start = (count - 1) * 35;
      const end = count * 35;
      iconsTableList.value = currentIconsList.value.slice(start, end);
    });

    watch(
      currentIconsList,
      () => {
        currentPage.value = 1;
        iconsTableList.value = currentIconsList.value.slice(0, 35);
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
    const chooseIcon = (iconName: string) => emit("chooseIcon", iconName);

    return () => (
      <div
        w-90
        h-60
        class="table-list-icons"
      >
        <div class="flex pr">
          {h(MInput, {
            modelValue: inputValue.value,
            "onUpdate:modelValue": (val: string) => (inputValue.value = val),
          })}
          <MButton onClick={searchIcon}>搜索</MButton>
        </div>
        {iconsTableList.value.map((iconName: string) => {
          return h("i", {
            class: `i-fluent-mdl2:${iconName} w-8 h-8 m-1 table-icon-item`,
            onClick: () => chooseIcon(iconName),
          });
        })}
        {h(MPagination, {
          total: currentIconsTotal.value,
          modelValue: currentPage.value,
          "onUpdate:modelValue": (val: number) => (currentPage.value = val),
          class: "pa bottom-0",
        })}
      </div>
    );
  },
});

export default TableListIcons;
