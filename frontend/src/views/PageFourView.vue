<script setup>
import { computed, onMounted, ref } from "vue"
import { useRouter } from "vue-router";

const router = useRouter()

const teams = [
    {
        parent:'Chiefs',
        children:[
            {
                role:'Main',
                members:[
                    {
                        name:'M Amish Kumar',
                        image:'https://i.postimg.cc/TRdX68bD/ID-CARD-BACK.png',
                    }
                    
                ]
            },
            {
                role:'Associate',
                members:[
                    {
                        name:'K Laasya',
                        image:'https://i.postimg.cc/kX14J747/laasya.png',
                    },
                    {
                        name:'Yashasvi',
                        image:'https://i.postimg.cc/cHRR2vdx/yashasvi.png',
                    },
                    
                ]
            },
        ]
    },
    {
        parent:"Associate Chief's",
        children:[
            {
                role:'',
                members:[
                {
                        name:'Nanda',
                        image:'https://i.postimg.cc/SNDXnWZF/nandha.png',
                        designation:'DEG 1'
                    },
                    {
                        name:'Satyanarayana',
                        image:'https://i.postimg.cc/X7cfQGQQ/sathya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Sai Shree',
                        image:'https://i.postimg.cc/XYsw0MM5/sai-shree.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Abhinandu',
                        image:'https://i.postimg.cc/8zYm68yS/abhinandu.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Praveen',
                        image:'https://i.postimg.cc/RFK6hyYX/praveen.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Dheeraj',
                        image:'https://i.postimg.cc/G2WfJ8qb/dheeraj.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Gnaneswar',
                        image:'https://i.postimg.cc/d3CzzmL7/gnaneshwar.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Harshitha',
                        image:'https://i.postimg.cc/wMBpZsDL/harshitha.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Uday',
                        image:'https://i.postimg.cc/LXnDW9nh/uday.png',
                        designation:'DEG 3'
                    },
                    // {
                    //     name:'User 2',
                    //     image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                    //     designation:'DEG 2'
                    // },
                    // {
                    //     name:'User 2',image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                    //     designation:'DEG 2'
                    // }
                ]
            },
        ]
    },
    {
        parent:"Website",
        children:[{
            role: '',
            members:[
                    {
                        name:'User 1',
                        image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                        designation:'DEG 1'
                    },
                    {
                        name:'User 2',
                        image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'User 3',
                        image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                        designation:'DEG 3'
                    }
                ]
            }
        ]
    }
]

const activeParent = ref('Chiefs')
const activeParentIndex = computed(() => {
    return teams.findIndex(team => team.parent === activeParent.value);
});

const activeChild = ref(teams[activeParentIndex.value].children[0].role || '')

const activeChildIndex = computed(() => {
    const activeParentIndexValue = activeParentIndex.value;
    const activeChildValue = activeChild.value;

    if (activeParentIndexValue !== -1) {
        const activeParentChildren = teams[activeParentIndexValue].children;

        // Find the index of the active child role
        const index = activeParentChildren.findIndex(child => child.role === activeChildValue);

        return index;
    }

    return -1;
});

const handleParentNavItemClick = (team) =>{
    activeParent.value = team
    activeChild.value = teams[activeParentIndex.value].children[0].role
}

const handleChildrenNavItemClick = (role) =>{
    activeChild.value = role.role
}

onMounted(()=>{
    document.title = `Team - Cine Carnival`
})

</script>

<template>
    <div class="flex flex-col min-h-[100vh] bg-[rgb(0,0,0)] justify-center py-4 ssm:pb-12 px-8">
        <button @click="router.back()" class="arrow-icon-prev fixed top-5 left-5 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
        <span class="text-center font-montserrat font-extrabold tracking-wide text-3xl sm:text-4xl relative mt-16">Team Carnival</span>
        <div class="flex flex-col gap-8 w-full justify-center relative mt-6">
            <nav aria-label="team-parent-nav" class="flex justify-center">
                <div class="border-b-2 border-gray-300 border-opacity-50 px-8 flex flex-wrap justify-center gap-8 pb-2">
                    <button :class="activeParent==team.parent ? 'text-gray-50': 'text-gray-400'" class="text-xl hover:text-gray-300 font-semibold transition-all tracking-wider" v-for="team in teams" :key="team.parent" @click="handleParentNavItemClick(team.parent)">{{ team.parent }}</button>
                </div>
            </nav>
            <nav v-if="teams[activeParentIndex].children[0].role.length>0 || false" aria-label="team-children-nav" class="flex justify-center">
                <div class="border-b-2 border-gray-300 border-opacity-50 px-8 flex flex-wrap justify-center gap-8 pb-2">
                    <button :class="activeChild==role.role?'text-gray-50':'text-gray-400'" class="text-xl hover:text-gray-300 font-semibold transition-all tracking-wider" v-for="role in teams[activeParentIndex].children" :key="role" @click="handleChildrenNavItemClick(role)">{{ role.role }}</button>
                </div>
            </nav>
        </div>

        <div class="flex relative min-[100vh] mt-12 justify-center">
            <div class="flex sm:gap-14 gap-10 flex-wrap justify-evenly">
                <div class="group rounded-2xl cursor-pointer scale-95 hover:scale-100 transition-all bg-[#1d1e2a] max-w-[250px] max-h-[350px] md:max-w-[300px] md:max-h-[400px] overflow-hidden" v-for="(member, index) in teams[activeParentIndex].children[activeChildIndex].members" :key="index">
                    <img class="group-hover:bg-opacity-20" :src="member.image" :alt="member.name"/>
                    <!-- <div class="flex rounded-r-lg group-hover:bg-[rgb(0,0,0)] group-hover:translate-x-0 group-hover:transition-all group-hover:duration-700 -translate-x-10 group-hover:backdrop:blur-xl flex-col px-4 py-2 absolute opacity-0 group-hover:opacity-100 bg-transparent bottom-3 text-center">
                        <span class="text-lg text-gray-300 font-semibold font-merriweather">{{ member.name }}</span>
                        <span class="text-md text-gray-400 font-robotoslab">{{ member.designation }}</span>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Oswald:wght@400;600&family=Roboto+Slab:wght@300;400;700&display=swap');
.arrow-icon-prev{
    animation: left-right 1000ms infinite;
}

@keyframes left-right {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
}

</style>