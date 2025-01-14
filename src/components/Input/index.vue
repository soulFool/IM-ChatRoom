<script setup lang="ts">
import { ref, watch } from 'vue'

// 先定义 Props 接口
interface InputProps {
  label?: string
  autocomplete?: 'on' | 'off'
  type?: string
  placeholder?: string
  modelValue: string
  name?: string
  color?: string
  borderColor?: string
}

// 使用 withDefaults 来设置默认值
const props = withDefaults(defineProps<InputProps>(), {
  label: '请输入',
  autocomplete: 'off',
  type: 'text',
  placeholder: '',
  name: 'input',
  color: 'rgb(255 156 49)',
})

// 定义需要触发的事件
const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  input: [event: string]
}>()

// 添加一个响应式变量来控制 label 的位置
const isFocus = ref(false)

const handleFocus = (e: FocusEvent) => {
  isFocus.value = true
  emit('focus', e)
}

const handleBlur = (e: FocusEvent) => {
  // 当输入框失去焦点且没有值时，label 回到原位
  if (!props.modelValue) {
    isFocus.value = false
  }
  emit('blur', e)
}

const handleInput = (e: any) => {
  emit('update:modelValue', e.detail.value)
  emit('input', e.detail.value)
}
</script>

<template>
  <div class="input">
    <input
      class="input__field"
      :autocomplete="props.autocomplete"
      :type="props.type"
      :name="props.name"
      :id="props.name"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    />
    <label
      :class="['input__label', { 'input__label--float': isFocus || !!props.modelValue }]"
      :for="props.name"
    >
      {{ props.label }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.input {
  position: relative;
  width: 100%;
  height: 100%;

  &__field {
    /* 布局属性 */
    position: relative;
    box-sizing: border-box;
    display: block;

    /* 尺寸属性 */
    width: 100%;
    height: 100%;
    padding: 10rpx 15rpx;

    /* 文字和外观属性 */
    font-size: 1rem;
    letter-spacing: 1rpx;
    border-bottom: v-bind('isFocus || !!props.modelValue ? `solid 1rpx ${props.borderColor || props.color}` : `solid 1rpx #8d8d8d`');
  }

  &__label {
    /* 布局属性 */
    position: absolute;
    top: 0;
    left: 15rpx;

    /* 文字和外观属性 */
    font-size: $uni-font-size-lg;
    color: #aaa;
    background-color: transparent;
    pointer-events: none;

    /* 动画属性 */
    transform: translateY(50%);
    transition: all 0.3s ease;

    &--float {
      padding: 0rpx 5rpx;

      color: v-bind('props.color');
      font-weight: bold;
      letter-spacing: 1px;
      background-color: #fff;
      border-radius: 100rpx;
      transform: translateY(-10%) translateX(-10rpx) scale(0.8);
    }
  }
}
</style>
