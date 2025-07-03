// . 𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗩𝗶𝗿𝘁𝘂𝗮𝗹 𝗗𝗢𝗠 𝗮𝗻𝗱 𝗵𝗼𝘄 𝗱𝗼𝗲𝘀 𝗥𝗲𝗮𝗰𝘁 𝘂𝘀𝗲 𝗶𝘁 𝗳𝗼𝗿 𝗿𝗲𝗻𝗱𝗲𝗿𝗶𝗻𝗴?
//  → How does React diff changes and batch updates efficiently?
// 𝟮. 𝗪𝗵𝗮𝘁 𝗵𝗮𝗽𝗽𝗲𝗻𝘀 𝗱𝘂𝗿𝗶𝗻𝗴 𝘁𝗵𝗲 𝗥𝗲𝗮𝗰𝘁 𝗿𝗲𝗻𝗱𝗲𝗿𝗶𝗻𝗴 𝗮𝗻𝗱 𝗿𝗲𝗰𝗼𝗻𝗰𝗶𝗹𝗶𝗮𝘁𝗶𝗼𝗻 𝗽𝗵𝗮𝘀𝗲?
//  → What’s the role of the Fiber architecture?
// 𝟯. 𝗛𝗼𝘄 𝗱𝗼 𝗥𝗲𝗮𝗰𝘁 𝗵𝗼𝗼𝗸𝘀 𝗹𝗶𝗸𝗲 𝘂𝘀𝗲𝗘𝗳𝗳𝗲𝗰𝘁 𝗮𝗻𝗱 𝘂𝘀𝗲𝗟𝗮𝘆𝗼𝘂𝘁𝗘𝗳𝗳𝗲𝗰𝘁 𝗱𝗶𝗳𝗳𝗲𝗿?
//  → When would you choose one over the other?
// 𝟰. 𝗛𝗼𝘄 𝗱𝗼𝗲𝘀 𝗥𝗲𝗮𝗰𝘁 𝗵𝗮𝗻𝗱𝗹𝗲 𝘀𝘁𝗮𝘁𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝘀 𝗶𝗻𝘁𝗲𝗿𝗻𝗮𝗹𝗹𝘆 𝘄𝗶𝘁𝗵 𝘂𝘀𝗲𝗦𝘁𝗮𝘁𝗲?
//  → Why is state update asynchronous, and how is batching handled?
// 𝟱. 𝗪𝗵𝗮𝘁 𝗮𝗿𝗲 𝗰𝗼𝗻𝘁𝗿𝗼𝗹𝗹𝗲𝗱 𝘃𝘀 𝘂𝗻𝗰𝗼𝗻𝘁𝗿𝗼𝗹𝗹𝗲𝗱 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁𝘀 𝗶𝗻 𝗳𝗼𝗿𝗺𝘀?
//  → When would you use each, and why?
// 𝟲. 𝗪𝗵𝗮𝘁 𝗰𝗮𝘂𝘀𝗲𝘀 𝘂𝗻𝗻𝗲𝗰𝗲𝘀𝘀𝗮𝗿𝘆 𝗿𝗲-𝗿𝗲𝗻𝗱𝗲𝗿𝘀 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁 𝗮𝗻𝗱 𝗵𝗼𝘄 𝗰𝗮𝗻 𝘆𝗼𝘂 𝗼𝗽𝘁𝗶𝗺𝗶𝘇𝗲 𝘁𝗵𝗲𝗺?
//  → How can React.memo, useMemo, and useCallback help?
// 𝟳. 𝗛𝗼𝘄 𝗱𝗼𝗲𝘀 𝗰𝗼𝗻𝘁𝗲𝘅𝘁 𝗔𝗣𝗜 𝗰𝗼𝗺𝗽𝗮𝗿𝗲 𝘁𝗼 𝗥𝗲𝗱𝘂𝘅 𝗳𝗼𝗿 𝘀𝘁𝗮𝘁𝗲 𝗺𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁?
//  → When is one preferable over the other?
// 𝟴. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗽𝗿𝗼𝗽 𝗱𝗿𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗻𝗱 𝗵𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗮𝘃𝗼𝗶𝗱 𝗶𝘁?
//  → What design patterns help in large applications?
// 𝟵. 𝗛𝗼𝘄 𝗱𝗼 𝗸𝗲𝘆𝘀 𝘄𝗼𝗿𝗸 𝗶𝗻 𝗹𝗶𝘀𝘁𝘀 𝗮𝗻𝗱 𝘄𝗵𝘆 𝗮𝗿𝗲 𝘁𝗵𝗲𝘆 𝗶𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁?
//  → What happens if keys are not unique?
// 𝟭𝟬. 𝗛𝗼𝘄 𝗱𝗼 𝗰𝘂𝘀𝘁𝗼𝗺 𝗵𝗼𝗼𝗸𝘀 𝘄𝗼𝗿𝗸 𝗮𝗻𝗱 𝘄𝗵𝗮𝘁 𝗮𝗿𝗲 𝘁𝗵𝗲𝗶𝗿 𝗯𝗲𝗻𝗲𝗳𝗶𝘁𝘀?
//  → Have you created a reusable hook in a project?
// 𝟭𝟭. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗥𝗲𝗮𝗰𝘁’𝘀 𝗖𝗼𝗻𝗰𝘂𝗿𝗿𝗲𝗻𝘁 𝗠𝗼𝗱𝗲 𝗮𝗻𝗱 𝗵𝗼𝘄 𝗱𝗼𝗲𝘀 𝗶𝘁 𝗶𝗺𝗽𝗿𝗼𝘃𝗲 𝗨𝗫?
//  → What are transitions and how do they relate to concurrent features?
// 𝟭𝟮. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗵𝘆𝗱𝗿𝗮𝘁𝗶𝗼𝗻 𝗶𝗻 𝗦𝗦𝗥 𝗮𝗻𝗱 𝗵𝗼𝘄 𝗱𝗼𝗲𝘀 𝗶𝘁 𝘄𝗼𝗿𝗸 𝘄𝗶𝘁𝗵 𝗥𝗲𝗮𝗰𝘁?
//  → What issues have you faced with SSR/Next.js?
// 𝟭𝟯. 𝗛𝗼𝘄 𝗱𝗼𝗲𝘀 𝗲𝗿𝗿𝗼𝗿 𝗵𝗮𝗻𝗱𝗹𝗶𝗻𝗴 𝘄𝗼𝗿𝗸 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁 𝘄𝗶𝘁𝗵 𝗘𝗿𝗿𝗼𝗿 𝗕𝗼𝘂𝗻𝗱𝗮𝗿𝗶𝗲𝘀?
//  → What types of errors can and can’t be caught?
// 𝟭𝟰. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗯𝗲𝘁𝘄𝗲𝗲𝗻 𝘂𝘀𝗲𝗥𝗲𝗳 𝗮𝗻𝗱 𝗰𝗿𝗲𝗮𝘁𝗲𝗥𝗲𝗳?
//  → When should refs be avoided altogether?
// 𝟭𝟱. 𝗛𝗼𝘄 𝗱𝗼𝗲𝘀 𝗥𝗲𝗮𝗰𝘁 𝗵𝗮𝗻𝗱𝗹𝗲 𝘀𝘆𝗻𝘁𝗵𝗲𝘁𝗶𝗰 𝗲𝘃𝗲𝗻𝘁𝘀 𝘂𝗻𝗱𝗲𝗿 𝘁𝗵𝗲 𝗵𝗼𝗼𝗱?
//  → What are the performance benefits of the synthetic event system?




// 𝐑𝐞𝐚𝐜𝐭 𝐓𝐡𝐞𝐨𝐫𝐲 𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬 
// *What is React? Why use it?
// *What are components in React?
// *What is JSX?
// *Explain virtual DOM and how it works.
// *What are props and state?
// *What is the difference between functional and class components?
// *What is the useEffect Hook? How is it different from componentDidMount?
// *What are controlled vs uncontrolled components?
// *What is prop drilling? How to avoid it?
// *What are keys in React? Why are they important?
// *What is React.memo and how does it help performance?
// *What is the reconciliation process in React?
// *How does React handle re-rendering?
// *What is context API and when should it be used?
// * Explain the React lifecycle methods.
// *What are HOCs (Higher-Order Components)?
// *What is React Fiber?
// *What are render props?
// 𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐂𝐨𝐝𝐢𝐧𝐠 
// *Build a counter app with increment, decrement and reset buttons.
// *Create a to-do list with add, delete, and checkbox to mark complete.
// *Build a toggle switch (on/off with state).
// *Create a searchable list that filters items based on user input.
// *Implement a tabbed UI using conditional rendering.
// *Build a form with validation (e.g., email, password).
// *Build a star rating component with hover and click.
// *Build a custom dropdown using keyboard navigation.
// *Create a reusable modal component with backdrop and escape handling.
// *Implement infinite scroll or pagination using an API.
// *Drag-and-drop functionality with custom hooks.
// 𝐑𝐞𝐚𝐜𝐭 𝐒𝐜𝐞𝐧𝐚𝐫𝐢𝐨-𝐁𝐚𝐬𝐞𝐝 
// *You have a large form with many inputs.how would you manage and optimize state?
// *You’re seeing unnecessary re-renders in a component how do you debug and fix it?
// *A parent component re-renders and causes all children to re-render.how can you optimize?
// *You need to share data across deeply nested components.how do you approach it?
// *How do you ensure accessibility (a11y) in your components?
// *You're asked to migrate a class-based component to a functional one with hooks.what are the steps?
// *An API fetch needs to be cancelled if the user navigates away.how would you implement that?
// *You need to make a component that is reused in multiple projects.how do you design it?
// *How do you secure a React frontend in terms of handling tokens and sensitive info?