<template>
	<q-page class="flex q-pa-md">
		<div class="row full-width">
			<div class="col-3 q-ma-sm">
				<AccountCard />
			</div>
		</div>
	</q-page>
</template>

<script>
import AccountCard from "src/components/AccountCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "IndexPage",
    components: { AccountCard }
});
</script>
