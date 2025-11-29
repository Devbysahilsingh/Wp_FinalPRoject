import blogTools from "./blogdata.js";

// 1. Read ID from URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")); // index is used as ID

const blog = blogTools[id];

if (!blog) {
    document.body.innerHTML = "<h1>Blog Not Found</h1>";
    throw new Error("Invalid Blog ID");
}

// 2. Background color
document.body.style.backgroundColor = blog.bgColor;

// 3. Update marquee
document.querySelectorAll(".marque h1").forEach(h => {
    h.textContent = `${blog.name.toUpperCase()} • ${blog.name.toUpperCase()}`;
});

// 4. Blog Title (subtitle)
document.getElementById("subtitle").textContent = blog.title;

// 5. Intro = tagline
document.querySelector(".blogintro").textContent = blog.tagline;

// 6. Main heading
document.getElementById("blog-title").textContent = blog.name;

// 7. Add grid image (thumbnail)
document.getElementById("gridImages").innerHTML = `
    <img src="${blog.thumbnail}" alt="${blog.name}">
`;

// 8. Insert blog content
const contentBlock = document.querySelector(".para-section");
contentBlock.innerHTML = `<div class="line"></div>`;

// Loop through sections
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
