<script lang="ts">
    import Axios from '../../axios'
    var showCreateNewLabel:Boolean=false
    var newCategoryName:String="";
    import type {categoryInterface} from '../../structures/structures'

    var categories:categoryInterface[]=[]
    function showDiv() {
        showCreateNewLabel=!showCreateNewLabel;
    }

    function add_category(){
        const options = {
            headers: {'Access-Control-Allow-Origin': "*"}
        };
        const params={category_name:newCategoryName}
        Axios.post('/add_category',params).then(response=>{
            categories=response.data
            console.log(response)}).catch(err=>console.log(err)); 
        
        showDiv()  
    }
    import Category from '../../componenents/category.svelte'
</script>
<div>

    <h1 class="text-4xl mt-12 bg-[#e4ebe5] py-16 text-black text-center">Reconnaissance <span class="text-[50px] font-bold text-[#630a8a]">images</span></h1>
    <div class="mt-1 flex flex-col justify-between w-[100%] px-2">
        <a href="/" class="text-[#6495f5] mt-1">&lt; Revenir au projet</a>
        <div class="mt-2 flex flex-row justify-between w-full pl-2 pr-12">
            <div class="h-28 w-[88%] rounded-md bg-sky-100 p-4">
                <p class="w-full text-center text-lime-700 text-lg">Cliquez sur le bouton 'plus' à droite pour ajouter votre premier dossier d'entraînement. </p>
            </div>
            <button type="button" class="border rounde-md p-2 border-gray-500 rounded-md font-semibold h-28 w-[10%]" on:click={showDiv}>
                Ajouter une nouvelle étiquett
            </button>
        </div>
    </div>
    {#if showCreateNewLabel}
    <div id="welcomeDiv"   class="w-screen  h-screen bg-gray-300 absolute top-0 opacity-90 z-50" >
        <div class=" w-[22%] m-auto mt-52 h-[40%] bg-white rounded-md z-90">
            <div class="w-full h-20 bg-blue-700 rounded-t-md pl-2 py-4">
                <h1 class="text-white text-2xl ">Ajouter une nouvelle étiquette</h1>
            </div>
            <div  class="p-5 flex flex-col space-y-8">
                <p class="text-gray-600 font-semibold">Entrer une nouvelle étiquette pour la reconnaissance</p>
                <input bind:value={newCategoryName} name="category_name" id="category_name" class="border-b outline-none w-full text-semibold text-lg" placeholder="label" >
                <div class="flex flex-row-reverse ">
                    <button type="button" class="ml-2 p-2  h-10 hover:bg-black hover:text-white rounded-md text-black text-semibold"  on:click={showDiv}>ANNULER</button>
                    <button on:click={add_category} type="submit" class=" h-10 p-2 bg-blue-700 hover:bg-blue-900 rounded-md text-white text-semibold">AJOUTER</button>
                </div>
            </div>
        </div>
    </div>
    {/if}
    <div class="flex flex-row flex-wrap gap-16 w-full mt-16 px-7" id="categories">
        {#each categories as item}
        <Category category={item} />
        
        {/each}
        
    </div>

    </div>