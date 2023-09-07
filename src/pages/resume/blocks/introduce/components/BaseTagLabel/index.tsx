import DefineIconsText from "@/components/DefineIcons&Text";
import { defineComponent } from "vue";

const BaseTagLabel = defineComponent({
  name: "BaseTagLabel",
  setup() {
    return () => (
      <div w-63 mt-3>
        <DefineIconsText />
      </div>
    )
  }
})
export default BaseTagLabel;