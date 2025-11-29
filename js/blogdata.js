/* ============================================================
   MASTER BLOG FILE – 10 CODING TOOLS WITH FULL DETAILS
   ============================================================ */

const blogTools = [


/* ============================================================
   1. PYTHON 
   ============================================================ */
{
  name: "Python",
  thumbnail: "/images/python.jpg",
  bgColor: "#306998",
  tagline: "Simple syntax. Endless possibilities.",

  title: "Python: Beginner-Friendly, Powerful, and Everywhere",

  sections: [
    {
      heading: "Why Python Is Popular",
      content: [
        "Python is one of the easiest programming languages.",
        "Perfect for beginners, automation, AI, ML, and backend development."
      ],
      subsections: [
        { subheading: "Print Statement", code: `print("Hello Python!")` },
        { subheading: "Variables", code: `name="Sahil"\nage=18` },
        { subheading: "If-Else", code: `if age>=18:\n    print("Adult")` },
        { subheading: "Loops", code: `for i in range(5): print(i)` },
        { subheading: "Functions", code: `def add(a,b): return a+b` },
        { subheading: "List", code: `items=["Python","JS"]` },
        { subheading: "Dictionary", code: `user={"name":"Sahil","age":18}` },
        { subheading: "Class", code: `class Car: pass` },
        { subheading: "File Write", code: `open("a.txt","w").write("Hello")` },
        { subheading: "Modules", code: `import math\nimport random` }
      ]
    }
  ]
},


/* ============================================================
   2. JAVASCRIPT 
   ============================================================ */
{
  name: "JavaScript",
  thumbnail: "/images/js.jpg",
  bgColor: "#F7DF1E",
  tagline: "The language the web runs on.",

  title: "JavaScript: Interactive, Fast, and Everywhere",

  sections: [
    {
      heading: "Core JavaScript Syntax",
      subsections: [
        { subheading: "Console Log", code: `console.log("Hello JS");` },
        { subheading: "Variables", code: `let x=10; const y=20;` },
        { subheading: "Function", code: `function greet(){}` },
        { subheading: "Arrow Function", code: `const add=(a,b)=>a+b;` },
        { subheading: "Object", code: `const user={name:"Sahil"};` },
        { subheading: "Array", code: `const arr=[1,2,3];` },
        { subheading: "Loop", code: `for(let i=0;i<5;i++){}` },
        { subheading: "Event Listener", code: `btn.addEventListener("click",()=>{})` },
        { subheading: "DOM Update", code: `document.body.innerHTML="Hello"` },
        { subheading: "Fetch API", code: `fetch("/api").then(r=>r.json())` }
      ]
    }
  ]
},


/* ============================================================
   3. REACT
   ============================================================ */
{
  name: "React",
  thumbnail: "/images/react.png",
  bgColor: "#61DAFB",
  tagline: "Create modern UI with components.",

  title: "React: Component-Based UI Framework",

  sections: [
    {
      heading: "React Essentials",
      subsections: [
        { subheading: "Import React", code: `import React from "react";` },
        { subheading: "Functional Component", code: `function App(){ return <h1>Hello</h1> }` },
        { subheading: "Props", code: `function Hi({name}){}` },
        { subheading: "State Hook", code: `const [count,setCount]=useState(0);` },
        { subheading: "Effect Hook", code: `useEffect(()=>{},[]);` },
        { subheading: "Conditional UI", code: `{isLogin ? <Home/>:<Login/>}` },
        { subheading: "List Map", code: `arr.map(i=><p>{i}</p>)` },
        { subheading: "Event Handler", code: `<button onClick={()=>{}}>Click</button>` },
        { subheading: "Custom Hook", code: `function useData(){}` },
        { subheading: "API Fetching", code: `useEffect(()=>{fetch().then()},[])` }
      ]
    }
  ]
},


/* ============================================================
   4. NODE.JS
   ============================================================ */
{
  name: "Node.js",
  thumbnail: "/images/node.webp",
  bgColor: "#3C873A",
  tagline: "JavaScript on the server.",

  title: "Node.js: Fast Backend Development",

  sections: [
    {
      heading: "Node.js Commands",
      subsections: [
        { subheading: "Initialize Project", code: `npm init -y` },
        { subheading: "Install Packages", code: `npm install express` },
        { subheading: "Basic Server", code: `const app=require("express")();` },
        { subheading: "GET Route", code: `app.get("/",(req,res)=>res.send("OK"))` },
        { subheading: "POST Route", code: `app.post("/user",(req,res)=>{})` },
        { subheading: "Listen", code: `app.listen(3000)` },
        { subheading: "Middleware", code: `app.use(express.json())` },
        { subheading: "File System", code: `fs.writeFileSync("a.txt","Hi")` },
        { subheading: "Environment", code: `require("dotenv").config()` },
        { subheading: "Nodemon", code: `npm install -g nodemon` }
      ]
    }
  ]
},


/* ============================================================
   5. DJANGO
   ============================================================ */
{
  name: "Django",
  thumbnail: "/images/django.jpg",
  bgColor: "#092E20",
  tagline: "Python framework with batteries included.",

  title: "Django: Full-Stack Web Framework",

  sections: [
    {
      heading: "Django Commands",
      subsections: [
        { subheading: "Create Project", code: `django-admin startproject mysite` },
        { subheading: "Create App", code: `python manage.py startapp blog` },
        { subheading: "Run Server", code: `python manage.py runserver` },
        { subheading: "Migrate", code: `python manage.py migrate` },
        { subheading: "Create Superuser", code: `python manage.py createsuperuser` },
        { subheading: "Model", code: `class Post(models.Model): title=models.CharField()` },
        { subheading: "View", code: `def home(r): return HttpResponse("Hi")` },
        { subheading: "URL", code: `path("", views.home)` },
        { subheading: "Admin Register", code: `admin.site.register(Post)` },
        { subheading: "Query DB", code: `Post.objects.all()` }
      ]
    }
  ]
},


/* ============================================================
   6. C++
   ============================================================ */
{
  name: "C++",
  thumbnail: "/images/c++.webp",
  bgColor: "#00599C",
  tagline: "High performance and full control.",

  title: "C++: Fast, Powerful, and Reliable",

  sections: [
    {
      heading: "Useful C++ Snippets",
      subsections: [
        { subheading: "Hello World", code: `cout<<"Hi";` },
        { subheading: "Variables", code: `int x=5;` },
        { subheading: "If-Else", code: `if(x>0){}` },
        { subheading: "For Loop", code: `for(int i=0;i<5;i++)` },
        { subheading: "While Loop", code: `while(x<10)` },
        { subheading: "Class", code: `class A{}` },
        { subheading: "Object", code: `A a;` },
        { subheading: "Pointer", code: `int* p=&x;` },
        { subheading: "Vector", code: `vector<int> v;` },
        { subheading: "File I/O", code: `ofstream f("a.txt");` }
      ]
    }
  ]
},


/* ============================================================
   7. JAVA
   ============================================================ */
{
  name: "Java",
  thumbnail: "/images/java.png",
  bgColor: "#D35400",
  tagline: "Write once, run anywhere.",

  title: "Java: Secure, Reliable and Scalable",

  sections: [
    {
      heading: "Java Commands",
      subsections: [
        { subheading: "Main Method", code: `public static void main(String[] a){}` },
        { subheading: "Print", code: `System.out.println("Hello");` },
        { subheading: "Variables", code: `int n=10;` },
        { subheading: "If-Else", code: `if(n>5){}` },
        { subheading: "For Loop", code: `for(int i=0;i<5;i++)` },
        { subheading: "Class", code: `class A{}` },
        { subheading: "Object", code: `A a=new A();` },
        { subheading: "Methods", code: `void run(){}` },
        { subheading: "Array", code: `int[] arr={1,2,3};` },
        { subheading: "Scanner", code: `Scanner sc=new Scanner(System.in);` }
      ]
    }
  ]
},


/* ============================================================
   8. MONGODB
   ============================================================ */
{
  name: "MongoDB",
  thumbnail: "/images/mongo.png",
  bgColor: "#47A248",
  tagline: "Flexible NoSQL database.",

  title: "MongoDB: Modern NoSQL for Developers",

  sections: [
    {
      heading: "MongoDB Commands",
      subsections: [
        { subheading: "Show DBs", code: `show dbs` },
        { subheading: "Use DB", code: `use school` },
        { subheading: "Insert One", code: `db.users.insertOne({name:"Sahil"})` },
        { subheading: "Insert Many", code: `db.users.insertMany([{a:1},{b:2}])` },
        { subheading: "Find", code: `db.users.find()` },
        { subheading: "FindOne", code: `db.users.findOne()` },
        { subheading: "Update", code: `db.users.updateOne({},{$set:{name:"Sahil"}})` },
        { subheading: "Delete", code: `db.users.deleteOne({})` },
        { subheading: "Sort", code: `db.users.find().sort({age:1})` },
        { subheading: "Count", code: `db.users.countDocuments()` }
      ]
    }
  ]
},


/* ============================================================
   9. GIT & GITHUB
   ============================================================ */
{
  name: "Git & GitHub",
  thumbnail: "/images/github.png",
  bgColor: "#181717",
  tagline: "Version control for developers.",

  title: "GitHub: Track Changes, Collaborate Easily",

  sections: [
    {
      heading: "Git Commands",
      subsections: [
        { subheading: "Init Repo", code: `git init` },
        { subheading: "Status", code: `git status` },
        { subheading: "Add Files", code: `git add .` },
        { subheading: "Commit", code: `git commit -m "msg"` },
        { subheading: "Add Remote", code: `git remote add origin URL` },
        { subheading: "Push", code: `git push origin main` },
        { subheading: "Pull", code: `git pull origin main` },
        { subheading: "Branch", code: `git branch feature` },
        { subheading: "Checkout", code: `git checkout feature` },
        { subheading: "Merge", code: `git merge feature` }
      ]
    }
  ]
},


/* ============================================================
   10. VS CODE
   ============================================================ */
{
  name: "VS Code",
  thumbnail: "/images/vs.jpg",
  bgColor: "#007ACC",
  tagline: "Fast and customizable editor.",

  title: "VS Code: The Smartest Code Editor",

  sections: [
    {
      heading: "VS Code Commands",
      subsections: [
        { subheading: "Command Palette", code: `Ctrl + Shift + P` },
        { subheading: "Open Terminal", code: `Ctrl + \`` },
        { subheading: "Split Editor", code: `Ctrl + \\` },
        { subheading: "Toggle Sidebar", code: `Ctrl + B` },
        { subheading: "Multi Cursor", code: `Alt + Click` },
        { subheading: "Format Document", code: `Shift + Alt + F` },
        { subheading: "Search", code: `Ctrl + Shift + F` },
        { subheading: "Go to File", code: `Ctrl + P` },
        { subheading: "Open Settings", code: `Ctrl + ,` },
        { subheading: "Comment Code", code: `Ctrl + /` }
      ]
    }
  ]
}

];

/* EXPORT */
export default blogTools;
