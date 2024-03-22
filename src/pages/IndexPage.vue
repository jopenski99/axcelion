<template>
	<q-page class="flex q-pa-md">
		<div class="row full-width">
			<div class="col-3">
				<AccountCard />
			</div>
			<div class="col-9">
				<div class="q-pl-md row full-width">
					<div class="col-12 ">
						<ProjectsCard />
					</div>
				</div>
			</div>
		</div>	
	</q-page>
</template>

<script>
import AccountCard from "src/components/AccountCard.vue";
import ProjectsCard from "src/components/ProjectsCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "IndexPage",
	components: { AccountCard, ProjectsCard }
});
</script>
