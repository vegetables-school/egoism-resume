import { MInput, MSelect } from "shuimo-ui";
import { h, ref, defineComponent } from "vue";
import { onClickOutside } from '@vueuse/core'

const TextSuInput = defineComponent({
  name: 'TextSuInput',
  setup() {
    const inputIsShow = ref(false);
    const inputValue = ref('标题');
    const textDom = ref('div');
    const textDomArr = ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']

    const changeToInput = () => {
      inputIsShow.value = true;
      const TextSuInputDom = document.getElementById('text-su-input');
      onClickOutside(TextSuInputDom, () => inputIsShow.value = false)
    }

    return () => (
      <>
        {
          inputIsShow.value ?
            <div id='text-su-input'>
              <MInput
                modelValue={inputValue.value}
                onUpdate: modelValue={(val: string) => (inputValue.value = val)}
                type="text" /><MSelect
                options={textDomArr}
                onUpdate: modelValue={(val: string) => textDom.value = val} 
                modelValue={textDom.value}
                />
            </div>
            :
            <div id='text-su-input'> {h(textDom.value, { onClick: () => changeToInput(), class: 'm-0' }, inputValue.value)}</div>
        }</>

    )
  }
})

export default TextSuInput;