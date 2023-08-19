import traveler from "../misc/traveler.png";
import todo_01 from "../misc/todo_01.png";
import todo_02 from "../misc/todo_02.png";
import todo_03 from "../misc/todo_03.png";

const Home = () => {
    return (
        <div class="bg-orange-50 z-0 w-full">
        <div class="flex justify-center">

        <div class="grid grid-cols-2 gap-0">
            <div class="col-span-1 pl-48 pr-20 justify-center items-center">
                <p class="text-6xl font-bold text-black font-serif mt-20">Get started your exciting <span class="text-orange-500">journey</span> with us.</p>
                <p class="text-lg mt-10 text-gray-500">A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place.</p>
                <button class="text-md mt-16 px-8 py-2 bg-slate-50 text-orange-500 hover:bg-orange-500 hover:text-white border-2 border-orange-500 shadow-md rounded-md">
                    Discover now
                </button>
            </div>
    
            <div class="col-span-1 ml-12 pb-12 px-12 justify-center items-center">
                <div class="w-auto h-auto absolute overflow-hidden rounded-full">
                    <img src={traveler} alt="traveler" title="traveler" class="object-containz-2" />
                    <div class="absolute inset-0 bg-orange-500" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 50%, 0 50%)", zIndex: -1 }}></div>
                </div>
            </div>

            <div class="col-span-2 flex justify-center mt-8 py-24">
            <div class="grid grid-cols-4 gap-2 relative bg-slate-50 rounded-lg border p-4">
            <div class="flex items-center">
                <span class="mr-2">
                    <p class="text-lg text-black">Location</p>
                    <p class="text-xs text-gray-500">Where are you going</p>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f59e0b" class="w-5 h-5 mb-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </div>
            <div class="flex items-center">
                <span class="mr-2">
                    <p class="text-lg text-black">Date</p>
                    <p class="text-xs text-gray-500">When you will go</p>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f59e0b" class="w-5 h-5 mb-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </div>
            <div class="flex items-center">
                <span class="mr-2">
                    <p class="text-lg text-black">Guest</p>
                    <p class="text-xs text-gray-500">Number of guest</p>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f59e0b" class="w-5 h-5 mb-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </div>
            <button class="text-md px-10 py-2 bg-orange-500 hover:bg-orange-400 text-white shadow-md rounded-md">
                    Explore now
                </button>
            </div>
            </div>
        </div>
        </div>
        
        <div class="col-span-2 flex flex-col justify-center py-16 bg-gray-100">        
        <span class="text-center">
            <p class="text-5xl font-serif font-bold text-black mt-8">Things you need <span class="text-orange-500">to do</span></p>
            <p class="text-lg text-gray-500 mt-4 mb-4">We ensure that you'll embark on a perfectly planned, <br/> safe vacation at a price you can afford.</p>
        </span>

        <div class="grid grid-cols-3 gap-4">
    <div class="bg-white shadow-md p-4 rounded-lg">
    <img src={todo_01} alt="todo_01" title="todo_01" class="object-containz-2" />
    <h2 class="text-2xl font-semibold">Sign Up</h2>
    <p>Sign Up Completes all the work associated with planning and processing</p>
    </div>

    <div class="bg-white shadow-md p-4 rounded-lg">
    <img src={todo_02} alt="todo_01" title="todo_01" class="object-containz-2" />
    <h2 class="text-2xl font-semibold">Worth of Money</h2>
    <p>After successful access then book from exclusive deals & pricing</p>
    </div>

    <div class="bg-white shadow-md p-4 rounded-lg">
    <img src={todo_03} alt="todo_01" title="todo_01" class="object-containz-2" />
    <h2 class="text-2xl font-semibold">Exciting Travel</h2>
    <p>Start and explore a wide range of exciting travel experience</p>
    </div>
    </div>
        

        </div>

              
        


        </div>
    )
}

export default Home;