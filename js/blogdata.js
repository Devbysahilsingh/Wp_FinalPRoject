/* ============================================================
   FINAL BLOG DATA FILE – CODE-FOCUSED LEARNING BLOG
   ============================================================ */

const blogTools = [

/* ============================================================
   1. PYTHON
   ============================================================ */
{
  name: "Python",
  thumbnail: "images/python.jpg",
  bgColor: "#306998",
  tagline: "Simple syntax. Endless possibilities.",
  title: "Python: Learn by Writing Code",
  intro:
    "Python is a beginner-friendly programming language known for its clean syntax and wide usage in automation, AI, data science, and backend development.",

  sections: [{
    heading: "Python Essentials",
    subsections: [

  {
    subheading: "Print Output",
    description: "The print() function is used to display messages, values, or results on the console. It is one of the most basic and commonly used functions in Python, mainly for debugging and understanding program flow.",
    code: `print("Hello Python")`,
    output: "Hello Python",
    useCase: "Debugging, displaying messages, showing results"
  },

  {
    subheading: "Variables",
    description: "Variables are containers that store data values in memory. Python variables do not require explicit data types, making the language flexible and beginner-friendly.",
    code: `name = "Sahil"\nage = 18`,
    output: "Variables created",
    useCase: "Store user data, configuration values"
  },

  {
    subheading: "Data Types",
    description: "Python supports multiple data types such as integers, floats, booleans, and strings. Understanding data types helps in performing correct operations and avoiding runtime errors.",
    code: `x = 10\nprice = 9.5\nactive = True`,
    output: "Values assigned",
    useCase: "Data handling and processing"
  },

  {
    subheading: "Type Checking",
    description: "The type() function is used to check the data type of a variable at runtime. This is useful for debugging and ensuring correct data flow in programs.",
    code: `x = 10\nprint(type(x))`,
    output: "<class 'int'>",
    useCase: "Validation and debugging"
  },

  {
    subheading: "If Else",
    description: "Conditional statements allow a program to make decisions based on conditions. The if-else structure executes different blocks of code depending on whether a condition is true or false.",
    code: `if age >= 18:\n    print("Adult")\nelse:\n    print("Minor")`,
    output: "Adult",
    useCase: "Decision making and validation logic"
  },

  {
    subheading: "For Loop",
    description: "A for loop is used to iterate over a sequence such as a list, range, or string. It is commonly used when the number of iterations is known beforehand.",
    code: `for i in range(3):\n    print(i)`,
    output: "0 1 2",
    useCase: "Iteration and repeated tasks"
  },

  {
    subheading: "While Loop",
    description: "A while loop repeatedly executes a block of code as long as a condition remains true. It is useful when the number of iterations is not known in advance.",
    code: `i = 0\nwhile i < 3:\n    print(i)\n    i += 1`,
    output: "0 1 2",
    useCase: "Controlled looping"
  },

  {
    subheading: "Break & Continue",
    description: "The break statement exits a loop prematurely, while continue skips the current iteration and moves to the next one. These statements give better control over loops.",
    code: `for i in range(5):\n    if i == 3:\n        break\n    print(i)`,
    output: "0 1 2",
    useCase: "Flow control inside loops"
  },

  {
    subheading: "Functions",
    description: "Functions are reusable blocks of code that perform a specific task. They help in reducing repetition, improving readability, and organizing large programs.",
    code: `def add(a, b):\n    return a + b`,
    output: "Returns sum",
    useCase: "Code reuse and modular programming"
  },

  {
    subheading: "Function Parameters",
    description: "Parameters allow functions to accept input values. This makes functions dynamic and reusable for different inputs.",
    code: `def greet(name):\n    print("Hello", name)`,
    output: "Hello Sahil",
    useCase: "Dynamic behavior"
  },

  {
    subheading: "Lists",
    description: "Lists are ordered, mutable collections that can store multiple values of different data types. They are widely used for grouping related data.",
    code: `nums = [1, 2, 3]`,
    output: "[1, 2, 3]",
    useCase: "Collections and data storage"
  },

  {
    subheading: "Tuples",
    description: "Tuples are similar to lists but are immutable, meaning their values cannot be changed after creation. They are used when data should remain constant.",
    code: `point = (10, 20)`,
    output: "(10, 20)",
    useCase: "Fixed or read-only data"
  },

  {
    subheading: "Dictionary",
    description: "Dictionaries store data in key-value pairs, allowing fast lookup and structured storage. They are ideal for representing real-world objects.",
    code: `user = {"name": "Sahil", "age": 18}`,
    output: "Dictionary created",
    useCase: "Structured and relational data"
  },

  {
    subheading: "File Write",
    description: "Python allows writing data to files using file handling functions. This is useful for saving logs, reports, or user data permanently.",
    code: `open("a.txt", "w").write("Hi")`,
    output: "File created",
    useCase: "Logging and persistent storage"
  },

  {
    subheading: "Exception Handling",
    description: "Exception handling prevents program crashes by catching errors gracefully. The try-except block ensures smooth execution even when errors occur.",
    code: `try:\n    int("a")\nexcept:\n    print("Error")`,
    output: "Error",
    useCase: "Crash prevention and reliability"
  }

]

  }]
},

/* ============================================================
   2. JAVASCRIPT
   ============================================================ */
{
  name: "JavaScript",
  thumbnail: "images/js.jpg",
  bgColor: "#F7DF1E",
  tagline: "The language the web runs on.",
  title: "JavaScript: Interactive Web Development",
  intro:
    "JavaScript makes websites interactive and dynamic. It runs in browsers and servers using Node.js.",

  sections: [{
    heading: "JavaScript Core",
   subsections: [

  {
    subheading: "Console Log",
    description: "console.log() is used to print output to the browser console. It helps developers understand program flow, inspect values, and debug errors during development.",
    code: `console.log("Hello JS");`,
    output: "Hello JS",
    useCase: "Debugging and logging values"
  },

  {
    subheading: "Variables",
    description: "Variables store data in memory. JavaScript provides let for changeable values, const for fixed values, and var (older syntax). Proper variable usage ensures clean and maintainable code.",
    code: `let x = 10;\nconst y = 20;`,
    output: "Variables stored",
    useCase: "Data storage"
  },

  {
    subheading: "Data Types",
    description: "JavaScript supports multiple data types such as string, number, boolean, undefined, null, object, and symbol. Understanding data types helps avoid logical errors.",
    code: `let name = "Sahil";`,
    output: "String stored",
    useCase: "Type handling"
  },

  {
    subheading: "Type Checking",
    description: "The typeof operator is used to identify the data type of a variable at runtime. This is useful for validation and debugging.",
    code: `let age = 18;\nconsole.log(typeof age);`,
    output: "number",
    useCase: "Validation and debugging"
  },

  {
    subheading: "If Else",
    description: "Conditional statements allow the program to execute different blocks of code based on conditions. They form the backbone of decision-making logic.",
    code: `if (x > 5) {\n  console.log("Big");\n} else {\n  console.log("Small");\n}`,
    output: "Big",
    useCase: "Logic control"
  },

  {
    subheading: "Switch Case",
    description: "Switch statements are used when multiple conditions depend on a single value. They provide a cleaner alternative to multiple if-else statements.",
    code: `let day = 1;\nswitch(day){\n  case 1: console.log("Monday"); break;\n}`,
    output: "Monday",
    useCase: "Multi-condition handling"
  },

  {
    subheading: "Loops",
    description: "Loops allow repetitive execution of code. The for loop is commonly used when the number of iterations is known.",
    code: `for(let i=0;i<3;i++){\n  console.log(i);\n}`,
    output: "0 1 2",
    useCase: "Iteration"
  },

  {
    subheading: "While Loop",
    description: "The while loop runs as long as a condition is true. It is useful when the number of iterations is unknown beforehand.",
    code: `let i=0;\nwhile(i<3){\n  console.log(i);\n  i++;\n}`,
    output: "0 1 2",
    useCase: "Controlled looping"
  },

  {
    subheading: "Functions",
    description: "Functions are reusable blocks of code that perform specific tasks. They improve modularity and reduce repetition.",
    code: `function add(a,b){\n  return a+b;\n}`,
    output: "Returns sum",
    useCase: "Reuse code"
  },

  {
    subheading: "Arrow Functions",
    description: "Arrow functions provide a shorter and cleaner syntax for writing functions. They are widely used in modern JavaScript frameworks.",
    code: `const add = (a,b) => a+b;`,
    output: "Returns sum",
    useCase: "Clean and modern code"
  },

  {
    subheading: "Arrays",
    description: "Arrays store multiple values in a single variable. JavaScript arrays are dynamic and can store mixed data types.",
    code: `let arr = [1,2,3];`,
    output: "[1,2,3]",
    useCase: "Collections and lists"
  },

  {
    subheading: "Objects",
    description: "Objects store data in key-value pairs. They represent real-world entities and are heavily used in APIs and applications.",
    code: `let user = { name: "Sahil", age: 18 };`,
    output: "Object created",
    useCase: "Structured user data"
  },

  {
    subheading: "DOM Update",
    description: "The Document Object Model (DOM) allows JavaScript to interact with HTML elements. Updating the DOM makes webpages dynamic.",
    code: `document.body.innerText = "Hi";`,
    output: "Hi",
    useCase: "Dynamic UI updates"
  },

  {
    subheading: "Events",
    description: "Events handle user interactions such as clicks, keypresses, and mouse movements. They make websites interactive.",
    code: `btn.onclick = () => alert("Clicked");`,
    output: "Alert shown",
    useCase: "User experience (UX)"
  },

  {
    subheading: "Fetch API",
    description: "The Fetch API is used to make HTTP requests and communicate with servers. It is essential for working with APIs and backend data.",
    code: `fetch("/api")\n  .then(res => res.json())\n  .then(data => console.log(data));`,
    output: "Response received",
    useCase: "API calls and data fetching"
  }

]

  }]
},

/* ============================================================
   3. REACT
   ============================================================ */
{
  name: "React",
  thumbnail: "images/react.png",
  bgColor: "#61DAFB",
  tagline: "Build UI with components.",
  title: "React: Component-Based UI",
  intro:
    "React is a JavaScript library for building fast and scalable user interfaces.",

  sections: [{
    heading: "React Essentials",
    subsections: [

  {
    subheading: "Component",
    description: "A component is the basic building block of a React application. It is a reusable piece of UI that returns JSX and controls how a part of the interface looks and behaves.",
    code: `function App(){\n  return <h1>Hello</h1>;\n}`,
    output: "Hello",
    useCase: "UI creation"
  },

  {
    subheading: "JSX",
    description: "JSX allows writing HTML-like syntax inside JavaScript. It makes React code more readable and allows dynamic data binding using curly braces.",
    code: `const name = "Sahil";\n<h2>{name}</h2>`,
    output: "Rendered text",
    useCase: "Dynamic UI rendering"
  },

  {
    subheading: "Props",
    description: "Props (properties) are used to pass data from a parent component to a child component. They help components stay reusable and configurable.",
    code: `function Card({ title }){\n  return <h3>{title}</h3>;\n}`,
    output: "Props received",
    useCase: "Component communication"
  },

  {
    subheading: "State",
    description: "State stores data that can change over time inside a component. When state changes, React automatically re-renders the UI.",
    code: `const [count, setCount] = useState(0);`,
    output: "State initialized",
    useCase: "Dynamic data handling"
  },

  {
    subheading: "useState Hook",
    description: "The useState hook allows functional components to manage state. It returns the current state and a function to update it.",
    code: `const [count, setCount] = useState(0);\nsetCount(count + 1);`,
    output: "State updated",
    useCase: "Interactive UI"
  },

  {
    subheading: "useEffect Hook",
    description: "useEffect is used to perform side effects such as API calls, subscriptions, or DOM updates. It runs after the component renders.",
    code: `useEffect(() => {\n  console.log("Mounted");\n}, []);`,
    output: "Effect executed",
    useCase: "API calls and lifecycle handling"
  },

  {
    subheading: "Event Handling",
    description: "React allows handling user events like clicks, input changes, and form submissions using camelCase event handlers.",
    code: `<button onClick={() => alert("Clicked")}>Click</button>`,
    output: "Event triggered",
    useCase: "User interaction (UX)"
  },

  {
    subheading: "Conditional Rendering",
    description: "Conditional rendering allows components or elements to be displayed based on conditions. It is commonly used for authentication and loading states.",
    code: `{isLogin ? <Home /> : <Login />}`,
    output: "Conditional view",
    useCase: "Authentication UI"
  },

  {
    subheading: "List Rendering",
    description: "React can render lists by mapping over arrays. Each item must have a unique key to help React optimize rendering.",
    code: `{arr.map(i => <p key={i}>{i}</p>)}`,
    output: "List rendered",
    useCase: "Dynamic lists"
  },

  {
    subheading: "Keys",
    description: "Keys help React identify which items have changed, added, or removed. They improve performance during re-rendering.",
    code: `{users.map(u => <User key={u.id} data={u} />)}`,
    output: "Optimized rendering",
    useCase: "Performance optimization"
  },

  {
    subheading: "Controlled Inputs",
    description: "Controlled components use React state to manage form inputs. This ensures full control over user input and validation.",
    code: `<input value={name} onChange={e => setName(e.target.value)} />`,
    output: "Input controlled",
    useCase: "Forms and validation"
  },

  {
    subheading: "Lifting State Up",
    description: "Lifting state up means moving shared state to a common parent component so that multiple child components can access it.",
    code: `setValue(dataFromChild);`,
    output: "Shared state",
    useCase: "Component coordination"
  },

  {
    subheading: "Fragments",
    description: "React Fragments allow grouping multiple elements without adding extra nodes to the DOM, keeping the markup clean.",
    code: `<> <h1>Hi</h1><p>Text</p> </>`,
    output: "Multiple elements rendered",
    useCase: "Clean DOM structure"
  },

  {
    subheading: "Custom Hooks",
    description: "Custom hooks allow reusing stateful logic across components. They help keep code DRY and improve maintainability.",
    code: `function useCounter(){ return useState(0); }`,
    output: "Reusable logic",
    useCase: "Code reuse"
  },

  {
    subheading: "Component Lifecycle",
    description: "React component lifecycle refers to different phases like mounting, updating, and unmounting. Hooks help manage these phases in functional components.",
    code: `useEffect(() => {\n  return () => console.log("Unmounted");\n}, []);`,
    output: "Lifecycle handled",
    useCase: "Cleanup and memory management"
  }

]

  }]
},

/* ============================================================
   4. NODE.JS
   ============================================================ */
{
  name: "Node.js",
  thumbnail: "images/node.webp",
  bgColor: "#3C873A",
  tagline: "JavaScript on the server.",
  title: "Node.js: Backend with JavaScript",
  intro:
    "Node.js allows JavaScript to run on the server and build fast backend applications.",

  sections: [{
    heading: "Node.js Basics",
    subsections: [

  {
    subheading: "Create Server",
    description: "Node.js allows you to create a web server using the built-in HTTP module. This forms the foundation of backend applications and handles client requests.",
    code: `const http = require("http");`,
    output: "Server created",
    useCase: "Backend applications"
  },

  {
    subheading: "HTTP Server Setup",
    description: "The createServer() method initializes an HTTP server that listens for incoming requests and sends responses.",
    code: `http.createServer((req, res) => {\n  res.end("Hello Server");\n});`,
    output: "Hello Server",
    useCase: "Basic server handling"
  },

  {
    subheading: "Express Setup",
    description: "Express is a lightweight Node.js framework that simplifies server creation, routing, and middleware management.",
    code: `const app = require("express")();`,
    output: "App initialized",
    useCase: "API building"
  },

  {
    subheading: "Server Listening",
    description: "The listen() method starts the server on a specified port and allows it to accept client requests.",
    code: `app.listen(3000, () => console.log("Server running"));`,
    output: "Server running",
    useCase: "Deploying servers"
  },

  {
    subheading: "GET Route",
    description: "GET routes handle requests for fetching data from the server. They are commonly used for APIs and page loading.",
    code: `app.get("/", (req, res) => res.send("OK"));`,
    output: "OK",
    useCase: "REST APIs"
  },

  {
    subheading: "POST Route",
    description: "POST routes are used to send data to the server, such as form submissions or user creation.",
    code: `app.post("/user", (req, res) => res.send("User created"));`,
    output: "User created",
    useCase: "Forms and data submission"
  },

  {
    subheading: "Request & Response",
    description: "The request (req) object contains client data, while the response (res) object is used to send data back to the client.",
    code: `app.get("/info", (req, res) => {\n  res.json({ status: "success" });\n});`,
    output: "{ status: success }",
    useCase: "Client-server communication"
  },

  {
    subheading: "Middleware",
    description: "Middleware functions execute between request and response. They are used for parsing data, authentication, and logging.",
    code: `app.use(require("express").json());`,
    output: "Middleware active",
    useCase: "Request processing"
  },

  {
    subheading: "Custom Middleware",
    description: "Custom middleware allows developers to run their own logic before the request reaches the route handler.",
    code: `app.use((req, res, next) => {\n  console.log("Request received");\n  next();\n});`,
    output: "Logged request",
    useCase: "Logging and security"
  },

  {
    subheading: "Route Parameters",
    description: "Route parameters allow dynamic values in URLs, enabling flexible API endpoints.",
    code: `app.get("/user/:id", (req, res) => {\n  res.send(req.params.id);\n});`,
    output: "Dynamic ID",
    useCase: "User-specific APIs"
  },

  {
    subheading: "Query Parameters",
    description: "Query parameters pass optional data in URLs and are commonly used for filtering and searching.",
    code: `app.get("/search", (req, res) => {\n  res.send(req.query.q);\n});`,
    output: "Query value",
    useCase: "Search APIs"
  },

  {
    subheading: "File System",
    description: "Node.js provides the fs module to read and write files. It is useful for logs, reports, and data storage.",
    code: `const fs = require("fs");\nfs.writeFileSync("a.txt", "Hi");`,
    output: "File written",
    useCase: "Logs and file handling"
  },

  {
    subheading: "Environment Variables",
    description: "Environment variables store sensitive configuration data like ports and API keys outside the codebase.",
    code: `process.env.PORT`,
    output: "Value accessed",
    useCase: "Security and configuration"
  },

  {
    subheading: "Error Handling",
    description: "Centralized error handling ensures the application does not crash and provides meaningful error responses.",
    code: `app.use((err, req, res, next) => {\n  res.status(500).send("Error");\n});`,
    output: "Error handled",
    useCase: "Application stability"
  },

  {
    subheading: "Project Structure",
    description: "Organizing routes, controllers, and services into folders improves scalability and maintainability.",
    code: `routes/\ncontrollers/\nserver.js`,
    output: "Structured project",
    useCase: "Scalable backend apps"
  }

]
  }]
},

/* ============================================================
   5. DJANGO
   ============================================================ */
{
  name: "Django",
  thumbnail: "images/django.jpg",
  bgColor: "#092E20",
  tagline: "Python web framework.",
  title: "Django: Full Stack with Python",
  intro:
    "Django is a powerful Python framework for building secure web applications quickly.",

  sections: [{
    heading: "Django Essentials",
   subsections: [

  {
    subheading: "Create Project",
    description: "A Django project is the main container that holds settings, URLs, and configurations for the entire web application.",
    code: `django-admin startproject mysite`,
    output: "Project created",
    useCase: "Web applications"
  },

  {
    subheading: "Project Structure",
    description: "Django generates a predefined project structure that separates configuration, routing, and application logic.",
    code: `mysite/\n  manage.py\n  mysite/\n    settings.py\n    urls.py`,
    output: "Structured project",
    useCase: "Scalable development"
  },

  {
    subheading: "Create App",
    description: "Apps are modular components inside a Django project. Each app handles a specific feature or functionality.",
    code: `python manage.py startapp blog`,
    output: "App created",
    useCase: "Modularity"
  },

  {
    subheading: "Register App",
    description: "After creating an app, it must be registered inside INSTALLED_APPS to make Django aware of it.",
    code: `INSTALLED_APPS = ["blog"]`,
    output: "App registered",
    useCase: "App integration"
  },

  {
    subheading: "Run Server",
    description: "The development server allows you to test the application locally and see changes instantly.",
    code: `python manage.py runserver`,
    output: "Server running",
    useCase: "Local testing"
  },

  {
    subheading: "Views",
    description: "Views handle incoming HTTP requests and return responses. They contain the business logic of the application.",
    code: `from django.http import HttpResponse\n\ndef home(request):\n    return HttpResponse("Hi")`,
    output: "Hi",
    useCase: "Request handling"
  },

  {
    subheading: "URLs",
    description: "URL configurations map incoming URLs to views. This system controls navigation within the application.",
    code: `path("", views.home)`,
    output: "Route created",
    useCase: "Routing"
  },

  {
    subheading: "Templates",
    description: "Templates define the HTML structure of a webpage. Django’s template engine supports dynamic data rendering.",
    code: `return render(request, "home.html")`,
    output: "Template rendered",
    useCase: "Frontend rendering"
  },

  {
    subheading: "Template Inheritance",
    description: "Template inheritance allows reuse of common layouts using base templates, reducing duplication.",
    code: `{% extends "base.html" %}`,
    output: "Layout reused",
    useCase: "Consistent UI"
  },

  {
    subheading: "Models",
    description: "Models define the database schema using Python classes. Django ORM automatically creates database tables.",
    code: `class Post(models.Model):\n    title = models.CharField(max_length=100)`,
    output: "Model created",
    useCase: "Database design"
  },

  {
    subheading: "Migrations",
    description: "Migrations track changes to models and apply them to the database safely.",
    code: `python manage.py makemigrations\npython manage.py migrate`,
    output: "Database updated",
    useCase: "Schema management"
  },

  {
    subheading: "Admin Panel",
    description: "Django provides a built-in admin interface to manage data without writing extra code.",
    code: `admin.site.register(Post)`,
    output: "Model visible in admin",
    useCase: "Content management"
  },

  {
    subheading: "Forms",
    description: "Django forms handle user input, validation, and security automatically.",
    code: `class PostForm(forms.ModelForm): pass`,
    output: "Form created",
    useCase: "User input handling"
  },

  {
    subheading: "Static Files",
    description: "Static files include CSS, JavaScript, and images that style and enhance the frontend.",
    code: `{% load static %}`,
    output: "Static loaded",
    useCase: "Styling and assets"
  },

  {
    subheading: "Authentication",
    description: "Django includes built-in authentication for login, logout, and user management.",
    code: `from django.contrib.auth import authenticate`,
    output: "User authenticated",
    useCase: "Secure access"
  }

]

  }]
},

/* ============================================================
   6. C++
   ============================================================ */
{
  name: "C++",
  thumbnail: "images/c++.webp",
  bgColor: "#00599C",
  tagline: "High performance programming.",
  title: "C++: Fast and Powerful",
  intro:
    "C++ is a high-performance language used in system software, games, and competitive programming.",

  sections: [{
    heading: "C++ Basics",
    subsections: [

  {
    subheading: "Console Output",
    description: "The cout object is used to display output on the console. It is part of the iostream library and is commonly used for debugging and user interaction.",
    code: `cout << "Hello";`,
    output: "Hello",
    useCase: "Console output"
  },

  {
    subheading: "Input",
    description: "The cin object is used to take input from the user through the console. It allows interactive programs.",
    code: `int x;\ncin >> x;`,
    output: "Value received",
    useCase: "User input"
  },

  {
    subheading: "Variables",
    description: "Variables store data in memory with a specific data type. C++ requires explicit declaration of variable types.",
    code: `int x = 10;`,
    output: "x = 10",
    useCase: "Data storage"
  },

  {
    subheading: "Data Types",
    description: "C++ supports various data types such as int, float, double, char, and bool. Choosing the correct type improves performance.",
    code: `float price = 9.5;`,
    output: "9.5",
    useCase: "Data handling"
  },

  {
    subheading: "If Else",
    description: "Conditional statements allow decision-making in programs by executing code blocks based on conditions.",
    code: `if (x > 0) {\n  cout << "Positive";\n}`,
    output: "Positive",
    useCase: "Logic building"
  },

  {
    subheading: "Switch Case",
    description: "Switch-case statements provide a cleaner way to handle multiple conditions based on a single variable.",
    code: `switch(x){\n  case 1: cout << "One"; break;\n}`,
    output: "One",
    useCase: "Multi-condition logic"
  },

  {
    subheading: "Loops",
    description: "Loops execute a block of code repeatedly. The for loop is commonly used when the number of iterations is known.",
    code: `for (int i = 0; i < 3; i++) {\n  cout << i;\n}`,
    output: "0 1 2",
    useCase: "Iteration"
  },

  {
    subheading: "While Loop",
    description: "The while loop executes code as long as a condition remains true. It is useful for dynamic loops.",
    code: `int i = 0;\nwhile (i < 3) {\n  cout << i;\n  i++;\n}`,
    output: "0 1 2",
    useCase: "Controlled looping"
  },

  {
    subheading: "Functions",
    description: "Functions are reusable blocks of code that perform a specific task. They improve readability and reduce duplication.",
    code: `int add(int a, int b) {\n  return a + b;\n}`,
    output: "Returns sum",
    useCase: "Code reuse"
  },

  {
    subheading: "Function Overloading",
    description: "Function overloading allows multiple functions with the same name but different parameters.",
    code: `int add(int a, int b);\nfloat add(float a, float b);`,
    output: "Multiple versions",
    useCase: "Flexibility"
  },

  {
    subheading: "Arrays",
    description: "Arrays store multiple values of the same data type in contiguous memory locations.",
    code: `int arr[3] = {1, 2, 3};`,
    output: "Array created",
    useCase: "Collections"
  },

  {
    subheading: "Pointers",
    description: "Pointers store the memory address of a variable. They provide low-level memory access and control.",
    code: `int* p = &x;`,
    output: "Pointer created",
    useCase: "Memory control"
  },

  {
    subheading: "References",
    description: "References act as an alias for an existing variable. They are safer and easier to use than pointers in many cases.",
    code: `int& ref = x;`,
    output: "Reference created",
    useCase: "Efficient parameter passing"
  },

  {
    subheading: "Classes & Objects",
    description: "Classes define custom data types, and objects are instances of those classes. This enables object-oriented programming.",
    code: `class User { public: int id; };`,
    output: "Class defined",
    useCase: "OOP design"
  },

  {
    subheading: "Constructors & Destructors",
    description: "Constructors initialize objects, while destructors clean up resources when objects are destroyed.",
    code: `User(){ }\n~User(){ }`,
    output: "Lifecycle handled",
    useCase: "Resource management"
  }

]

  }]
},

/* ============================================================
   7. JAVA
   ============================================================ */
{
  name: "Java",
  thumbnail: "images/java.png",
  bgColor: "#D35400",
  tagline: "Write once, run anywhere.",
  title: "Java: Robust Programming",
  intro:
    "Java is a platform-independent language used for enterprise and Android development.",

  sections: [{
    heading: "Java Basics",
    subsections: [

  {
    subheading: "Main Method",
    description: "The main method is the entry point of every Java program. Execution always starts from this method when the program runs.",
    code: `public static void main(String[] args) {\n}`,
    output: "Program starts",
    useCase: "Program execution"
  },

  {
    subheading: "Class Structure",
    description: "In Java, every program must be written inside a class. Classes act as blueprints for creating objects.",
    code: `class Hello {\n  public static void main(String[] args) {}\n}`,
    output: "Class defined",
    useCase: "Program structure"
  },

  {
    subheading: "Print Output",
    description: "System.out.println() is used to print output on the console. It is commonly used for debugging and displaying results.",
    code: `System.out.println("Hi");`,
    output: "Hi",
    useCase: "Console output"
  },

  {
    subheading: "Variables",
    description: "Variables store data in memory. Java is a strongly typed language, so variable types must be declared explicitly.",
    code: `int x = 10;`,
    output: "x = 10",
    useCase: "Data storage"
  },

  {
    subheading: "Data Types",
    description: "Java supports primitive data types such as int, float, double, char, and boolean. Choosing the correct type improves performance.",
    code: `double price = 99.99;`,
    output: "99.99",
    useCase: "Data handling"
  },

  {
    subheading: "If Else",
    description: "Conditional statements allow the program to execute different code blocks based on conditions.",
    code: `if (x > 5) {\n  System.out.println("Greater");\n}`,
    output: "Greater",
    useCase: "Decision making"
  },

  {
    subheading: "Switch Case",
    description: "The switch statement handles multiple conditions based on a single variable in a cleaner way than if-else chains.",
    code: `switch(x){\n  case 1: System.out.println("One"); break;\n}`,
    output: "One",
    useCase: "Multi-condition logic"
  },

  {
    subheading: "For Loop",
    description: "The for loop is used when the number of iterations is known beforehand.",
    code: `for (int i = 0; i < 3; i++) {\n  System.out.println(i);\n}`,
    output: "0 1 2",
    useCase: "Iteration"
  },

  {
    subheading: "While Loop",
    description: "The while loop executes code repeatedly as long as a condition remains true.",
    code: `int i = 0;\nwhile (i < 3) {\n  System.out.println(i);\n  i++;\n}`,
    output: "0 1 2",
    useCase: "Controlled looping"
  },

  {
    subheading: "Methods",
    description: "Methods are reusable blocks of code that perform specific tasks. They help organize large programs.",
    code: `static int add(int a, int b) {\n  return a + b;\n}`,
    output: "Returns sum",
    useCase: "Code reuse"
  },

  {
    subheading: "Method Overloading",
    description: "Method overloading allows multiple methods with the same name but different parameter lists.",
    code: `int add(int a, int b);\ndouble add(double a, double b);`,
    output: "Multiple versions",
    useCase: "Flexibility"
  },

  {
    subheading: "Arrays",
    description: "Arrays store multiple values of the same type in a fixed-size structure.",
    code: `int[] arr = {1, 2, 3};`,
    output: "Array created",
    useCase: "Collections"
  },

  {
    subheading: "Classes & Objects",
    description: "Classes define properties and behavior, while objects are instances of those classes.",
    code: `class User { int id; }\nUser u = new User();`,
    output: "Object created",
    useCase: "Object-oriented programming"
  },

  {
    subheading: "Constructors",
    description: "Constructors are special methods used to initialize objects when they are created.",
    code: `User(){ System.out.println("Created"); }`,
    output: "Created",
    useCase: "Object initialization"
  },

  {
    subheading: "Access Modifiers",
    description: "Access modifiers like public, private, and protected control the visibility of variables and methods.",
    code: `private int age;`,
    output: "Restricted access",
    useCase: "Encapsulation"
  }

]
  }]
},

/* ============================================================
   8. MONGODB
   ============================================================ */
{
  name: "MongoDB",
  thumbnail: "images/mongo.png",
  bgColor: "#47A248",
  tagline: "Flexible NoSQL database.",
  title: "MongoDB: Document Database",
  intro:
    "MongoDB stores data in JSON-like documents and scales easily.",

  sections: [{
    heading: "MongoDB Commands",
    subsections: [

  {
    subheading: "Insert One",
    description: "insertOne() is used to add a single document into a MongoDB collection. MongoDB stores data in flexible JSON-like documents.",
    code: `db.users.insertOne({ name: "Sahil" })`,
    output: "Document inserted",
    useCase: "Store user data"
  },

  {
    subheading: "Insert Many",
    description: "insertMany() allows inserting multiple documents at once, which is faster and more efficient for bulk operations.",
    code: `db.users.insertMany([{name:"Aman"},{name:"Ravi"}])`,
    output: "Multiple documents inserted",
    useCase: "Bulk data storage"
  },

  {
    subheading: "Find All",
    description: "find() fetches all documents from a collection. It returns a cursor that can be iterated.",
    code: `db.users.find()`,
    output: "Documents returned",
    useCase: "Read data"
  },

  {
    subheading: "Find One",
    description: "findOne() retrieves the first matching document based on the query filter.",
    code: `db.users.findOne({ name: "Sahil" })`,
    output: "Single document",
    useCase: "Fetch specific record"
  },

  {
    subheading: "Filter Query",
    description: "MongoDB allows filtering documents using conditions similar to JSON syntax.",
    code: `db.users.find({ age: { $gte: 18 } })`,
    output: "Filtered results",
    useCase: "Conditional queries"
  },

  {
    subheading: "Projection",
    description: "Projection is used to include or exclude specific fields from query results.",
    code: `db.users.find({}, { name: 1, _id: 0 })`,
    output: "Selected fields",
    useCase: "Optimize response size"
  },

  {
    subheading: "Update One",
    description: "updateOne() modifies a single matching document using update operators like $set.",
    code: `db.users.updateOne({ name:"Sahil" }, { $set:{ age:18 } })`,
    output: "Document updated",
    useCase: "Edit data"
  },

  {
    subheading: "Update Many",
    description: "updateMany() updates multiple documents that match the filter condition.",
    code: `db.users.updateMany({}, { $set:{ active:true } })`,
    output: "Multiple documents updated",
    useCase: "Bulk updates"
  },

  {
    subheading: "Delete One",
    description: "deleteOne() removes a single document from the collection.",
    code: `db.users.deleteOne({ name:"Sahil" })`,
    output: "Document deleted",
    useCase: "Cleanup data"
  },

  {
    subheading: "Delete Many",
    description: "deleteMany() removes all documents that match the filter condition.",
    code: `db.users.deleteMany({ active:false })`,
    output: "Documents deleted",
    useCase: "Mass cleanup"
  },

  {
    subheading: "Sort",
    description: "sort() arranges query results in ascending or descending order.",
    code: `db.users.find().sort({ age: -1 })`,
    output: "Sorted results",
    useCase: "Ranking and ordering"
  },

  {
    subheading: "Limit",
    description: "limit() restricts the number of documents returned from a query.",
    code: `db.users.find().limit(5)`,
    output: "Limited results",
    useCase: "Pagination"
  },

  {
    subheading: "Indexes",
    description: "Indexes improve query performance by reducing search time on large datasets.",
    code: `db.users.createIndex({ name: 1 })`,
    output: "Index created",
    useCase: "Performance optimization"
  },

  {
    subheading: "Aggregation",
    description: "Aggregation pipelines process data in stages to perform operations like grouping and calculations.",
    code: `db.users.aggregate([{ $group:{ _id:null, total:{ $sum:1 } } }])`,
    output: "Aggregated result",
    useCase: "Analytics"
  },

  {
    subheading: "Schema Flexibility",
    description: "MongoDB does not enforce a fixed schema, allowing different documents to have different fields.",
    code: `{ name:"Sahil", skills:["JS","Python"] }`,
    output: "Flexible document",
    useCase: "Rapid development"
  }

]

  }]
},

/* ============================================================
   9. GIT & GITHUB
   ============================================================ */
{
  name: "Git & GitHub",
  thumbnail: "images/github.png",
  bgColor: "#181717",
  tagline: "Version control system.",
  title: "Git & GitHub: Track Code",
  intro:
    "Git tracks changes while GitHub hosts repositories.",

  sections: [{
    heading: "Git Commands",
    subsections: [

  {
    subheading: "Init Repository",
    description: "git init creates a new Git repository in the current directory. It initializes version control so Git can start tracking changes.",
    code: `git init`,
    output: "Repository created",
    useCase: "Start a new project"
  },

  {
    subheading: "Git Status",
    description: "git status shows the current state of the working directory and staging area, including modified and untracked files.",
    code: `git status`,
    output: "Status shown",
    useCase: "Track file changes"
  },

  {
    subheading: "Add Files",
    description: "git add stages files so they are ready to be committed. Using '.' stages all changes at once.",
    code: `git add .`,
    output: "Files staged",
    useCase: "Prepare changes for commit"
  },

  {
    subheading: "Commit Changes",
    description: "A commit saves the staged changes with a message describing what was done. Commits form the project history.",
    code: `git commit -m "Initial commit"`,
    output: "Committed",
    useCase: "Save project history"
  },

  {
    subheading: "Commit Best Practices",
    description: "Good commit messages are short, clear, and descriptive. They help teams understand changes easily.",
    code: `git commit -m "Add login page UI"`,
    output: "Clean history",
    useCase: "Team collaboration"
  },

  {
    subheading: "Git Log",
    description: "git log displays the commit history, showing commit IDs, authors, and messages.",
    code: `git log`,
    output: "Commit history shown",
    useCase: "Review project timeline"
  },

  {
    subheading: "Branches",
    description: "Branches allow working on new features without affecting the main codebase.",
    code: `git branch feature-ui`,
    output: "Branch created",
    useCase: "Parallel development"
  },

  {
    subheading: "Switch Branch",
    description: "git checkout or git switch moves you between branches.",
    code: `git switch feature-ui`,
    output: "Branch switched",
    useCase: "Feature development"
  },

  {
    subheading: "Merge Branch",
    description: "Merging combines changes from one branch into another, usually feature branches into main.",
    code: `git merge feature-ui`,
    output: "Merged successfully",
    useCase: "Integrate features"
  },

  {
    subheading: "Remote Repository",
    description: "A remote repository connects your local project to platforms like GitHub or GitLab.",
    code: `git remote add origin https://github.com/user/repo.git`,
    output: "Remote added",
    useCase: "Online backup"
  },

  {
    subheading: "Push Changes",
    description: "git push uploads local commits to a remote repository so others can access them.",
    code: `git push origin main`,
    output: "Pushed",
    useCase: "Backup & sharing"
  },

  {
    subheading: "Pull Changes",
    description: "git pull fetches and merges updates from the remote repository into the local project.",
    code: `git pull origin main`,
    output: "Updated locally",
    useCase: "Sync with team"
  },

  {
    subheading: "Clone Repository",
    description: "git clone copies an existing remote repository to your local machine.",
    code: `git clone https://github.com/user/repo.git`,
    output: "Repo cloned",
    useCase: "Start working on existing project"
  },

  {
    subheading: "Undo Changes",
    description: "Git allows undoing changes safely using commands like checkout, restore, or reset.",
    code: `git restore file.txt`,
    output: "Changes reverted",
    useCase: "Fix mistakes"
  },

  {
    subheading: "Git Workflow",
    description: "A typical Git workflow includes branching, committing, pushing, and opening pull requests for review.",
    code: `feature → commit → push → PR`,
    output: "Workflow followed",
    useCase: "Professional development"
  }

]

  }]
},

/* ============================================================
   10. VS CODE
   ============================================================ */
{
  name: "VS Code",
  thumbnail: "images/vs.jpg",
  bgColor: "#007ACC",
  tagline: "Powerful code editor.",
  title: "VS Code: Developer Tool",
  intro:
    "VS Code is a fast, customizable editor with debugging and extensions.",

  sections: [{
    heading: "VS Code Usage",
    subsections: [

  {
    subheading: "Open Terminal",
    description: "VS Code provides an integrated terminal that allows you to run commands without leaving the editor. It supports multiple shells like PowerShell, CMD, and Bash.",
    code: `Ctrl + \``,
    output: "Terminal opened",
    useCase: "Run commands"
  },

  {
    subheading: "Toggle Terminal",
    description: "You can quickly show or hide the terminal to maximize coding space while keeping it accessible.",
    code: `Ctrl + \``,
    output: "Terminal toggled",
    useCase: "Workspace management"
  },

  {
    subheading: "Command Palette",
    description: "The Command Palette provides quick access to all VS Code commands, settings, and extensions using search.",
    code: `Ctrl + Shift + P`,
    output: "Palette opened",
    useCase: "Fast navigation"
  },

  {
    subheading: "Quick File Open",
    description: "Quickly search and open files by name without browsing folders.",
    code: `Ctrl + P`,
    output: "File search opened",
    useCase: "Fast file navigation"
  },

  {
    subheading: "Format Code",
    description: "Auto-format code according to language standards and formatter rules to maintain clean code.",
    code: `Shift + Alt + F`,
    output: "Formatted",
    useCase: "Clean and readable code"
  },

  {
    subheading: "Multi-Cursor Editing",
    description: "Multiple cursors allow editing several lines at once, significantly speeding up repetitive tasks.",
    code: `Alt + Click`,
    output: "Multiple cursors active",
    useCase: "Rapid editing"
  },

  {
    subheading: "Rename Symbol",
    description: "Renaming a variable or function automatically updates all references across the file or project.",
    code: `F2`,
    output: "Renamed everywhere",
    useCase: "Safe refactoring"
  },

  {
    subheading: "Go to Definition",
    description: "Jump directly to the definition of variables, functions, or classes.",
    code: `F12`,
    output: "Definition opened",
    useCase: "Code understanding"
  },

  {
    subheading: "Peek Definition",
    description: "View the definition of a symbol inline without leaving the current file.",
    code: `Alt + F12`,
    output: "Inline preview",
    useCase: "Quick inspection"
  },

  {
    subheading: "Extensions",
    description: "VS Code extensions add language support, themes, linters, and productivity tools.",
    code: `Ctrl + Shift + X`,
    output: "Extensions panel",
    useCase: "Boost productivity"
  },

  {
    subheading: "Settings",
    description: "VS Code settings allow customization of editor behavior, themes, formatting, and shortcuts.",
    code: `Ctrl + ,`,
    output: "Settings opened",
    useCase: "Personalization"
  },

  {
    subheading: "Split Editor",
    description: "Split the editor to view and edit multiple files side by side.",
    code: `Ctrl + \\`,
    output: "Editor split",
    useCase: "Multi-file work"
  },

  {
    subheading: "Zen Mode",
    description: "Zen Mode hides distractions and focuses entirely on code.",
    code: `Ctrl + K Z`,
    output: "Zen mode enabled",
    useCase: "Deep focus"
  },

  {
    subheading: "Search in Files",
    description: "Search across the entire project for variables, functions, or text.",
    code: `Ctrl + Shift + F`,
    output: "Search results",
    useCase: "Code analysis"
  },

  {
    subheading: "Debug Panel",
    description: "The debug panel helps run, pause, and inspect code execution step-by-step.",
    code: `Ctrl + Shift + D`,
    output: "Debugger opened",
    useCase: "Bug fixing"
  }

]

  }]
}

];

/* EXPORT */
export default blogTools;
