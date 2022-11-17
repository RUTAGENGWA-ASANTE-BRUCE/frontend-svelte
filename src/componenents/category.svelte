<script lang="ts">
    import type {categoryInterface} from '../structures/structures'
    export let category:categoryInterface
</script>


<div class="border-8 border-black w-[550px]  rounded-xl relative">
    <h5 class="absolute -top-16 left-48 h-20 bg-white text-green-700 px-5 w-fit text-[50px] font-bold">{category.name}</h5>
    <p class="text-xl text-center px-5 mt-8">
        Faites glisser les images depuis d'autres fenêtres du navigateur et déposez-les ici
    </p>
    <div class=" flex flex-col">
        <div class="w-[90%] h-[400px]  m-5 border border-black border-box flex flex-col " >
            <!-- <img src="{{ url_for('video_feed') }}" class="h-[75%] w-full"> -->
            <input hidden name="category_name" id="category_name" value="{category.name.substring()}" />
            <div class="h-[75%] w-full bg-gray-500"></div>
            <button type="submit" class="mt-2 bg-sky-500 text-white hover:bg-sky-700 p-2 w-fit m-auto  rounded-md">Add Picture</button>
        </div>
        <div class="flex flex-row gap-8 px-5 flex-wrap overflow-y-scroll w-full h-80">    
            <!-- {% for image in category.images_array %} -->
            <!-- <img src="{{image}}" class="h-40 w-40 rounded-md" /> -->
            <!-- {% endfor %} -->
        </div>
    </div>
    
</div>