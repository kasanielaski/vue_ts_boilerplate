<template lang="pug">
.mock
    | {{ mockValue }}
    Mock2.mock2(
        text="foo"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';

// поправить расширение файлов при импорте
import Mock2 from './Mock2.vue';

const mock = namespace('mock');

@Component({
    components: {
        Mock2
    }
})
export default class Mock extends Vue {
    @mock.Action('mockAction') mockAction!: (payload: string) => void;

    @mock.Getter('getMockValue') mockValue!: string;

    created() {
        this.mockAction('newSting');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
