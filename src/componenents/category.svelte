<script lang="ts">
    import type {categoryInterface} from '../structures/structures'
    export let category:categoryInterface
    let loading: boolean = false;
    import Axios from '../axios'
    var images_array=[]
    let updatedImages:string[]=[]
    
    const createTestImage=()=>{
        loading=true
        const params={category_name:category.name}
        Axios.post('/add_category_image',params).then(response=>{
            let initial_images=category.images_array
            initial_images.push(response.data)
            loading=false
            updatedImages=initial_images;
            console.log(updatedImages)}).catch(err=>console.log(err));
    }
	import { Circle2 } from 'svelte-loading-spinners';
</script>


<div class="border-8 border-black w-[550px]  rounded-xl relative">
    <h5 class="absolute -top-16 left-48 h-20 bg-white text-green-700 px-5 w-fit text-[50px] font-bold">{category.name}</h5>
    <p class="text-xl text-center px-5 mt-8">
        Faites glisser les images depuis d'autres fenêtres du navigateur et déposez-les ici
    </p>
    <div class=" flex flex-col">
        <div class="w-[90%] h-[400px]  m-5 border border-black border-box flex flex-col " >
            <img src="http://127.0.0.1:8000/video_feed" class="h-[75%] w-full">
            <button on:click={createTestImage} class="mt-2 bg-sky-500 text-white hover:bg-sky-700 p-2 w-fit m-auto  rounded-md">Add Picture</button>
        </div>
        <div class="flex flex-row gap-8 px-5 flex-wrap overflow-y-scroll w-full h-80"> 
            {#if loading}
            <div class="ml-20">

                <Circle2 size="60" colorOuter="#FF3E00" colorCenter="" colorInner="#0768ad" unit="px" />
            </div>
            {/if}
            {#if updatedImages.length===0}   
            {#each   category.images_array as image}
            <img src={`http://127.0.0.1:8000/test_images/${image}`} class="h-40 w-40 rounded-md" />
            {/each}

            {:else}
                {#each   updatedImages as image}
                <img src={`http://127.0.0.1:8000/test_images/${image}`} class="h-40 w-40 rounded-md" />
                {/each}
            {/if}

        </div>
    </div>
    
</div>