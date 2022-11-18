<script lang="ts">
	import Axios from '../../axios';
	let descriptions = [
		{
			title: "Qu'avez vous accompli ?",
			description:
				"Vous avez rassemblé des exemples d'images qu'un ordinateur peut utiliser pour reconnaître quand les images sont paper or sisss.",
			conclusion: 'Que vous avez rassemblés : 10 examples des chac étiquette'
		},
		{
			title: 'Quelle est la prochaine étape ?',
			description: "Prêt à commencer l'entraînement de l'ordinateur ?",
			conclusion:
				"Cliquez sur le bouton ci-dessous pour commencer l'entraînement d'un modèle d'apprentissage machine à l'aide des exemples que vous avez collectés"
		}
	];
	let loading: boolean = false;
	import { Circle2 } from 'svelte-loading-spinners';
    let training_result:string=""
	const trainTheModel = () => {
		loading = true;
		Axios.get('/train_model')
			.then((response) => {
				console.log(response);
                training_result=response.data
                loading=false;
			})
			.catch((err) => console.log(err));
        
	};
</script>
<head>
    <title>Training the model</title>
</head>
<div class="flex flex-col">
	<h1 class="text-4xl mt-12 bg-[#e4ebe5] py-16 text-black text-center">
		Modèles d'apprentissage machine
	</h1>
	<div class="mt-1 flex flex-col justify-between w-[100%] px-2">
		<a data-sveltekit-noscroll href="/" class="text-[#6495f5] mt-1">&lt; Revenir au projet</a>
	</div>

	<div class="flex flex-row gap-8 md:px-28 mt-5 flex-wrap w-full">
		{#each descriptions as description}
			<div class="w-full md:w-[48%] bg-[#e4ebe5] rounded-3xl h-80 space-y-8 px-10 py-8">
				<h1 class="text-4xl bg-[#e4ebe5] text-black font-semibold text-center">
					{description.title}
				</h1>
				<p class="text-black text-xl">{description.description}</p>
				<p class="text-black text-xl">{description.conclusion}</p>
			</div>
		{/each}
	</div>
	<div class=" px-[100px] my-10">
		<div class="border  border-black p-0.5 h-80  w-full space-y-8">
			<p class=" font-semibold">Informations provenant de l'ordinateur d'entraînement :</p>

			<button on:click={trainTheModel}
				class="flex items-center justify-center ml-20 hover:bg-blue-700  bg-[#0768ad] w-[40%] p-3 rounded-md text-white"
				>Apprendre & Tester</button
			>
            {#if loading}
            <div class="ml-20">

                <Circle2 size="60" colorOuter="#FF3E00" colorCenter="" colorInner="#0768ad" unit="px" />
            </div>
            {/if}
            <p class="ml-20">{training_result}</p>
		</div>
      
	</div>
</div>
