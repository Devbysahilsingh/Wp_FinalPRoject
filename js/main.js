import blogTools from "./blogdata.js";

/* ===========================
   ⏰ LIVE TIME (API + FALLBACK)
=========================== */
async function startClock() {
    let currentTime;

    try {
        const res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata", { cache: "no-store" });
        if (!res.ok) throw new Error("API failed");
        const data = await res.json();
        currentTime = new Date(data.datetime);
    } catch (error) {
        console.warn("WorldTime API failed, using local time");
        currentTime = new Date();
    }

    function updateClock() {
        currentTime.setSeconds(currentTime.getSeconds() + 1);
        const timeString = currentTime.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });

        const el = document.getElementById("timeText");
        if (el) el.textContent = timeString;
    }

    updateClock();
    setInterval(updateClock, 1000);
}
startClock();

/* ===========================
   PAGE CHECK
=========================== */
const onDetailPage = window.location.pathname.includes("blog-detail");

/* ===========================
   HOME PAGE LOGIC
=========================== */
if (!onDetailPage) {
    const slider = document.getElementById("slider");
    if (slider) {
        slider.style.setProperty("--quantity", blogTools.length);

        blogTools.forEach((blog, index) => {
            const div = document.createElement("div");
            div.classList.add("item");
            div.style.setProperty("--position", index + 1);
            div.innerHTML = `<img src="${blog.thumbnail}" alt="${blog.name} Thumbnail">`;

            div.onclick = () => fadeCard(div, index);
            slider.appendChild(div);
        });

        function fadeCard(card, id) {
            const cover = document.getElementById("transitionCover");
            const h1 = document.getElementById("heading1");
            const h2 = document.getElementById("heading2");
            const h3 = document.getElementById("heading3");

            cover.style.backgroundColor = blogTools[id].bgColor;

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            tl.to(card, { opacity: 0, scale: 0.9, duration: 0.25 });
            tl.to(cover, { top: "0%", duration: 0.6 });
            gsap.set([h1, h2, h3], { opacity: 0 });

            tl.fromTo(h1, { x: "-100%" }, { x: 0, opacity: 1, duration: 0.4 });
            tl.fromTo(h2, { x: "100%" }, { x: 0, opacity: 1, duration: 0.4 }, "-=0.2");
            tl.fromTo(h3, { x: "-100%" }, { x: 0, opacity: 1, duration: 0.4 }, "-=0.2");

            tl.to([h1, h2, h3], { opacity: 0, duration: 0.4 });
            tl.call(() => {
                window.location.href = `blog-detail.html?id=${id}`;
            });
        }
    }
}

/* ===========================
   BLOG DETAIL PAGE
=========================== */
if (onDetailPage) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const blog = blogTools[id];

    if (!blog) {
        document.body.innerHTML = "<h1>Blog Not Found</h1>";
        throw new Error("Invalid Blog ID");
    }

    // 🎨 Apply color + update headings
    document.body.style.backgroundColor = blog.bgColor;
    document.querySelectorAll(".marque h1").forEach(h => {
        h.textContent = `${blog.name.toUpperCase()} • ${blog.name.toUpperCase()}`;
    });

    document.getElementById("subtitle").textContent = blog.title;
    document.querySelector(".blogintro").textContent = blog.intro;
    document.getElementById("blog-title").textContent = blog.name;
    document.getElementById("gridImages").innerHTML = `<img src="${blog.thumbnail}" alt="${blog.name}">`;

    // Inject Sections
    const contentBlock = document.getElementById("contentBlock");
    contentBlock.innerHTML = "";

    blog.sections.forEach(section => {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("blog-section");

        if (section.heading) {
            sectionDiv.innerHTML += `<h2 class="section-heading">${section.heading}</h2>`;
        }

        if (section.subsections) {
            section.subsections.forEach(sub => {
                sectionDiv.innerHTML += `
                <div class="sub-block">
                    <h3 class="sub-heading">${sub.subheading || ""}</h3>
                    <p class="sub-description">${sub.description || ""}</p>

                    ${
                        sub.code
                            ? `<pre class="code-block"><code>${sub.code}</code></pre>`
                            : ""
                    }

                    ${
                        sub.output
                            ? `<p class="output"><strong>Output:</strong> ${sub.output}</p>`
                            : ""
                    }

                    ${
                        sub.useCase
                            ? `<p class="use-case"><strong>Use Case:</strong> ${sub.useCase}</p>`
                            : ""
                    }
                </div>`;
            });
        }

        contentBlock.appendChild(sectionDiv);
    });

    // Click-to-Copy Code
    document.querySelectorAll("pre code").forEach(block => {
        block.addEventListener("click", () => {
            navigator.clipboard.writeText(block.textContent);
            block.classList.add("copied");
            setTimeout(() => block.classList.remove("copied"), 800);
        });
    });
}
// ===============================
// GSAP SCROLL ANIMATIONS
// ===============================

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  // ===============================
  // DESKTOP & LARGE SCREENS ONLY
  // ===============================
  "(min-width: 601px)": function () {

    // INTRO SECTION
    gsap.from(".subtitle", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 80%"
      }
    });

    gsap.from(".blogintro", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 80%"
      }
    });

    // SECTION HEADINGS
    gsap.utils.toArray(".section-heading").forEach(heading => {
      gsap.from(heading, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%"
        }
      });
    });

    // SUB BLOCK CARDS
    gsap.utils.toArray(".sub-block").forEach((block, index) => {
      gsap.from(block, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.05,
        scrollTrigger: {
          trigger: block,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // BLOG IMAGES
    gsap.utils.toArray(".gridImages img").forEach(img => {
      gsap.from(img, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 85%"
        }
      });
    });

    // REVIEW SECTION
    gsap.from("#reviewSection h2", {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#reviewSection",
        start: "top 80%"
      }
    });

    gsap.from("#reviewForm", {
      opacity: 0,
      y: 60,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#reviewSection",
        start: "top 75%"
      }
    });
  },

  // ===============================
  // SMALL SCREENS (NO ANIMATION)
  // ===============================
  "(max-width: 600px)": function () {
    // Kill any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

});

/* ===============================
   BLOG REVIEW VALIDATION
================================ */
const form = document.getElementById("reviewForm");

if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const feedbackInput = document.getElementById("feedback");
    const ratingInput = document.getElementById("rating");
    const stars = document.querySelectorAll(".rating span");
    const successMsg = document.getElementById("successMsg");

    // =========================
    // STAR RATING
    // =========================
    stars.forEach(star => {
        star.addEventListener("click", () => {
            const value = star.dataset.value;
            ratingInput.value = value;

            stars.forEach(s => s.classList.remove("active"));
            for (let i = 0; i < value; i++) {
                stars[i].classList.add("active");
            }
        });
    });

    // =========================
    // FORM SUBMIT
    // =========================
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors();
        let valid = true;

        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            valid = false;
        }

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Enter a valid email");
            valid = false;
        }

        if (ratingInput.value === "") {
            showError(ratingInput, "Please select a rating");
            valid = false;
        }

        if (feedbackInput.value.trim().length < 10) {
            showError(feedbackInput, "Feedback must be at least 10 characters");
            valid = false;
        }

        if (valid) {
            // =========================
            // SAVE TO LOCAL STORAGE
            // =========================
            const review = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                rating: ratingInput.value,
                feedback: feedbackInput.value.trim(),
                time: new Date().toISOString()
            };

            const existingReviews =
                JSON.parse(localStorage.getItem("blogReviews")) || [];

            existingReviews.push(review);
            localStorage.setItem("blogReviews", JSON.stringify(existingReviews));

            // =========================
            // SUCCESS UI
            // =========================
            successMsg.textContent = "Thank you! Your review has been submitted 🎉";
            successMsg.style.color = "limegreen";

            alert("✅ Review submitted successfully!");

            form.reset();
            stars.forEach(s => s.classList.remove("active"));
        }
    });

    // =========================
    // HELPERS
    // =========================
    function showError(input, message) {
        const error = input.parentElement.querySelector(".error");
        if (error) error.textContent = message;
    }

    function clearErrors() {
        document.querySelectorAll(".error").forEach(e => (e.textContent = ""));
        successMsg.textContent = "";
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}
