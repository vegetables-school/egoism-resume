import { defineComponent } from "vue";

const IncreaseTag = defineComponent({
  emits: ["newTagLabel"],
  name: "IncreaseTag",
  setup(_, { emit }) {
    return () => (
          <div
            c-green
            w-60
            b-b
            h-6
            b-1
            mt-3
            b-green
            b-dashed
            b-rd-1
            p-l-1
            cursor-pointer
            onClick={() => emit("newTagLabel")}
          >
            <i
              i-fluent-mdl2:circle-addition
              text-4
            ></i>
          </div>
    )
  }
});

export default IncreaseTag;