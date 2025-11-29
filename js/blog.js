// import { blogs } from "./blogdata.js";

// const container = document.getElementById("blog-container");

// blogs.forEach(blog => {
//   container.innerHTML += `
//     <div class="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
//       <img src="${blog.image}" class="h-48 w-full object-cover" />

//       <div class="p-4">
//         <p class="text-sm text-gray-500 mb-2">${blog.date}</p>
//         <h2 class="text-xl font-bold mb-2">${blog.title}</h2>
//         <p class="text-gray-600 mb-4">${blog.short}</p>

//         <a href="blog-detail.html?id=${blog.id}" 
//            class="text-blue-500 font-semibold hover:underline">
//            Read More →
//         </a>
//       </div>
//     </div>
//   `;
// });

Shery.imageEffect("#back",{style:6,config:{"a":{"value":1.6,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.107573953198567},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.3,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.49,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},gooey:true})
// Shery.imageEffect("#back",{style:5,debug:true,gooey:true})

let elems=document.querySelectorAll(".elem");
elems.forEach(function(elem){
let h1s = elem.querySelectorAll("h1");
let index = 0;
let animating = false;


document.querySelector("#main").addEventListener("click", () => {
if(!animating){
  animating = true;

    // Animate current h1 going up
  gsap.to(h1s[index], {
    top: "-=100%",
    ease: "expo.inOut",
    duration: 1,
    onComplete: function () {
      gsap.set(this._targets[0], { top: "100%" });
      animating = false;
    }
  });

  // Move to next index
  index = (index === h1s.length - 1) ? 0 : index + 1;

  // Animate next h1 entering
  gsap.to(h1s[index], {
    top: "-=100%",
    ease: "expo.inOut",
    duration: 1
  });
}
});
})