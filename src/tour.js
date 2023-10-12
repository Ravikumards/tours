import { useState } from "react"

export default function Tour({tours,removeTour}){
    const[showText, setText]=useState(false)
    return(
        <section class="m-auto w-1/3">
            <div class="title">
            <h2 class="font-bold text-lg  flex flex-col items-center"><div>Our Tours</div><div class="w-16 border-b-4 border-cyan-400"></div></h2>
            </div>
            <div>
                {tours?.map((e)=> 
                    <article class="rounded-sm border-2 mt-8 shadow-lg">
                        <img src={e.image}></img>
                        <div class="flex justify-between p-4 align-center">
                            <h4 class="font-bold text-sm">{e.name}</h4>
                            <h4 class="text-cyan-400 text-sm">${e.price}</h4>
                        </div>
                        <p class="p-4 mt-0 text-sm">{showText ? e.info : `${e.info.substring(0, 200)}...`}<button class="text-cyan-500" onClick={()=> setText(!showText)}>Read {showText ? "Less" : "More"}</button></p>
                        <button class="block m-auto mb-4 border border-red-800 w-32 text-red-800" onClick={() => removeTour(e.id)}>Not Interested</button>
                    </article>
                )}
            </div>
        </section>
    )
}