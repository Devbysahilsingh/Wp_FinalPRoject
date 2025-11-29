import blogTools from "./blogdata.js";  

const onDetailPage = window.location.pathname.includes("blog-detail");

if (!onDetailPage) {

    const slider = document.getElementById("slider");

    slider.style.setProperty("--quantity", blogTools.length);

    blogTools.forEach((blog, index) => {
        const div = document.createElement("div");
        div.classList.add("item");

        div.style.setProperty("--position", index + 1);

        div.innerHTML = `
            <img src="${blog.thumbnail}" alt="${blog.name} Thumbnail">
        `;
        div.onclick = () => fadeCard(div, index);

        slider.appendChild(div);
    });

function fadeCard(card, id) {
    const gsapRef = window.gsap;

    const cover = document.getElementById("transitionCover");
    const h1 = document.getElementById("heading1");
    const h2 = document.getElementById("heading2");
    const h3 = document.getElementById("heading3");

    // ⭐ Set transition cover color dynamically
    cover.style.backgroundColor = blogTools[id].bgColor;

    const tl = gsapRef.timeline({
        defaults: { ease: "power3.out" }
    });

    tl.to(card, { opacity: 0, scale: 0.9, duration: 0.25 });

    tl.to(cover, { top: "0%", duration: 0.6 });

    gsapRef.set(h1, { x: "-100%", opacity: 0 });
    gsapRef.set(h2, { x: "100%", opacity: 0 });
    gsapRef.set(h3, { x: "-100%", opacity: 0 });

    tl.to(h1, { x: 0, opacity: 1, duration: 0.4 });
    tl.to(h2, { x: 0, opacity: 1, duration: 0.4 }, "-=0.2");
    tl.to(h3, { x: 0, opacity: 1, duration: 0.4 }, "-=0.2");

    tl.to([h1, h2, h3], { opacity: 0, duration: 0.5 });

    tl.call(() => {
        window.location.href = `blog-detail.html?id=${id}`;
    });
}

    const container = document.getElementById("pagebody");
    const leftBtn = document.getElementById("Lbutton");
    const rightBtn = document.getElementById("Rbutton");

    let currentX = 1500;
    const moveAmount = 1000;
    const minX = -1500;
    const maxX = 1500;

    gsap.set(container, { x: currentX, overwrite: true });

    function updatePosition() {
        gsap.to(container, {
            x: currentX,
            duration: 0.6,
            ease: "power2.out",
        });
        updateButtons();
    }

    function updateButtons() {
        leftBtn.style.opacity = currentX >= maxX ? "0.4" : "1";
        leftBtn.style.pointerEvents = currentX >= maxX ? "none" : "auto";

        rightBtn.style.opacity = currentX <= minX ? "0.4" : "1";
        rightBtn.style.pointerEvents = currentX <= minX ? "none" : "auto";
    }

    rightBtn.addEventListener("click", () => {
        const oldX = currentX;
        currentX = Math.max(minX, currentX - moveAmount);
        if (currentX !== oldX) updatePosition();
    });

    leftBtn.addEventListener("click", () => {
        const oldX = currentX;
        currentX = Math.min(maxX, currentX + moveAmount);
        if (currentX !== oldX) updatePosition();
    });

    updateButtons();
}


if (onDetailPage) {

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    const blog = blogTools[id];

    if (!blog) {
        document.body.innerHTML = "<h1>Blog not found</h1>";
        throw new Error("Invalid ID");
    }

    document.body.style.backgroundColor = blog.bgColor;

    document.querySelector(".nav-left").textContent = blog.name;

    document.querySelectorAll(".marque h1").forEach(h =>
        h.textContent = `${blog.name} • ${blog.name} • ${blog.name}`
    );

    document.getElementById("subtitle").textContent = blog.title;

    document.querySelector(".blogintro").textContent = blog.tagline;

    const grid = document.querySelector(".gridImages");
    grid.innerHTML = `<img src="${blog.thumbnail}" alt="${blog.name}">`;

    const contentBlock = document.querySelector(".para-section");
    contentBlock.innerHTML = `<div class="line"></div>`;

    blog.sections.forEach(section => {
        if (section.heading) {
            contentBlock.innerHTML += `<h2 class="section-heading">${section.heading}</h2>`;
        }

        if (section.content) {
            section.content.forEach(p => {
                contentBlock.innerHTML += `<p class="para-text">${p}</p>`;
            });
        }

        if (section.subsections) {
            section.subsections.forEach(sub => {
                contentBlock.innerHTML += `<h3 class="sub-heading">${sub.subheading}</h3>`;
                if (sub.text) {
                    contentBlock.innerHTML += `<p class="para-text">${sub.text}</p>`;
                }
                if (sub.code) {
                    contentBlock.innerHTML += `
                        <pre class="code-block"><code>${sub.code}</code></pre>
                    `;
                }
            });
        }
    });

}
