import { MInput } from "shuimo-ui";
import { h, nextTick, ref, defineComponent } from "vue";

interface TextSuInputProps {
  textDom: string;
}

const TextSuInput = defineComponent({
  name: 'TextSuInput',
  props: {
    textDom: {
      type: String,
      default: 'div'
    }
  },
  setup(props: TextSuInputProps) {
    const inputIsShow = ref(false);
    const refInput = ref();
    const inputValue = ref('标题');

    const changeToInput = () => {
      inputIsShow.value = true;
      nextTick(() => {
        refInput.value?.$el.children[0].children[0].focus()
      })
    }

    return () => (
      inputIsShow.value ?
        <MInput
          ref={refInput} modelValue={inputValue.value}
          onUpdate: modelValue={(val: string) => (inputValue.value = val)}
          onBlur={() => inputIsShow.value = false}
          type="text"
        /> :
        h(props.textDom, { onClick: () => changeToInput(), class: 'm-0' }, inputValue.value)
    )
  }
})

export default TextSuInput;