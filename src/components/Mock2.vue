<template lang="pug">
.mock2
    | hello from text prop {{ text }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Mock2 extends Vue {
    @Prop({
        type: String,
        default: '',
        required: true
    })
    text!: string;
}
</script>
