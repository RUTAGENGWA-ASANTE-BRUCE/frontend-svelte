<script lang="ts">
	import Axios from '../../axios';
    let loading: boolean = false;
	import { Circle2 } from 'svelte-loading-spinners';
    let testing_result:string=""
	const predict_class = () => {
		loading = true;
		Axios.get('/predict_class')
			.then((response) => {
				console.log(response);
                testing_result=`Predicted: ${response.data}`
                loading=false;
			})
			.catch((err) => console.log(err));
        
	};
</script>

<h1 class="text-4xl mt-12 bg-[#e4ebe5] py-16 text-black text-center">
    Essayer le Modèles 
</h1>
<div class="mt-1 flex flex-col justify-between w-[100%] px-2">
    <a data-sveltekit-noscroll href="/" class="text-[#6495f5] mt-1">&lt; Revenir au projet</a>
</div>

<div class=" flex flex-col mt-10 md:w-[40%] h-fit">
    <div class="w-full  m-5 border border-black border-box flex flex-col " >
        <img src="http://127.0.0.1:8000/video_feed" class="h-[400px] w-full">
        <button on:click={predict_class} class="mt-2 bg-sky-500 text-white hover:bg-sky-700 p-2 w-fit m-auto  rounded-md">Predict class</button>
        <div class="flex flex-col  p-3  w-full h-40"> 
            {#if loading}
            <div class="">
                
                <Circle2 size="60" colorOuter="#FF3E00" colorCenter="" colorInner="#0768ad" unit="px" />
            </div>
            {/if}
            <p class="font-semibold text-lg">{testing_result}</p>
            
        </div>
    </div>
</div>