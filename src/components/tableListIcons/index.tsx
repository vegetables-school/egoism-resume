import {
  icons as fluentMdl2Icons,
  info as fluentMdl2Info,
} from "@iconify-json/fluent-mdl2";
import { MInput, MButton, MPagination } from "shuimo-ui";
import { h, ref, watch } from "vue";
import "./index.scss";

const TableListIcons = () => {
  const iconTotal = fluentMdl2Info.total;
  const currentPage = ref(5);
  const icons: string[] = Object.keys(fluentMdl2Icons.icons);
  const iconsList = ref<string[]>([
    "accept",
    "accept-medium",
    "access-logo",
    "accessibilty-checker",
    "account-activity",
    "account-browser",
    "account-management",
    "accounts",
    "action-center",
    "activate-orders",
    "activity-feed",
    "add",
    "add-bookmark",
    "add-event",
    "add-favorite",
    "add-favorite-fill",
    "add-friend",
    "add-group",
    "add-home",
    "add-in",
    "add-link",
    "add-notes",
    "add-online-meeting",
    "add-phone",
    "add-reaction",
    "add-space-after",
    "add-space-before",
    "add-to",
    "add-to-shopping-list",
    "add-work",
    "add-space-after",
    "add-space-before",
    "add-to",
    "add-to-shopping-list",
    "add-work",
  ]);
  watch(currentPage, (count) => {
    const start = (count - 1) * 35;
    const end = count * 35;
    iconsList.value = icons.slice(start, end);
    console.log(iconsList.value);
  });
  return (
    <div
      w-90
      h-60
      class="table-list-icons"
    >
      <div
        class="flex"
      >
        <MInput />
        <MButton>搜索</MButton>
      </div>
      {iconsList.value.map((iconName: string) => {
        return h("i", {
          class: `i-fluent-mdl2:${iconName} w-8 h-8 m-1 table-icon-item`,
        });
      })}
      {h(MPagination, {
        total: iconTotal,
        modelValue: currentPage.value,
        "onUpdate:modelValue": (val: number) => (currentPage.value = val),
      })}
    </div>
  );
};

export default TableListIcons;
