import { defineComponent, ref } from "vue";
import IncreaseTag from "./components/IncreaseTagLabel";
import BaseTagLabel from "./components/BaseTagLabel";

const Introduce = defineComponent({
  name: "Introduce",
  setup() {
    const newTagLabelList = ref<number[]>([]);
    const newTagLabel = () => {
      newTagLabelList.value.push(1);
    };
    return () => (
      <div mt-10 mb-10 >
        <div flex flex-wrap >
          {newTagLabelList.value.map(() => <BaseTagLabel />)}
          <IncreaseTag onNewTagLabel={newTagLabel} />
        </div>
      </div>
    );
  },
});

export default Introduce;
