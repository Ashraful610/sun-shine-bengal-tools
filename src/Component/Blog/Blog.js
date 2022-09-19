import React from 'react';

const Blog = () => {
    return (
        <div className='w-full min-h-screen h-fit p-5 bg-black/90'>
            <div className='backdrop-blur-sm bg-white/10 w-full h-fit text-white p-5 my-5'>
               <h2 className='sm:text-3xl text-2xl text-center py-2'>How will you improve the performance of a React Application</h2>
               <p>
               React makes it easy to create a fast user interface without putting a lot of effort into optimizing performance. passing props to JSX elements using the spread operation can be extremely convenient.Data immutability is an opinionated way of writing code that forces i to reflect on how i structure my app’s data flow. In React, whenever a component’s state changes, both component and its children gets rendered unnecessarily. Often times, the component and children’s barely need to change yet we end up rendering everything.
               </p>
            </div>
            <div className='backdrop-blur-sm bg-white/10 w-full h-fit text-white p-5 my-5'>
               <h2 className='sm:text-3xl text-2xl text-center py-2'>
                    What are the different ways to manage a state in a React application?
                 </h2>
               <p>
               React Hooks to manage state with functional components when writing new code, rather than using class-based components. Although the use of React Hooks is considered a more modern practice, it’s important to understand how to manage state on class-based components as well. Learning the concepts behind state management will help i navigate and troubleshoot class-based state management in existing code bases and help i decide when class-based state management is more appropriate.
               </p>
            </div>
            <div className='backdrop-blur-sm bg-white/10 w-full h-fit text-white p-5 my-5'>
               <h2 className='sm:text-3xl text-2xl text-center py-2'>
                     How does prototypical inheritance work?
                 </h2>
               <p>
               In a class-based model, i have Classes, which are represented by the triple . In this model , Classes only describe how instances look like, and Instances are the only thing i can interact with . Classes cannot be instances, and i can’t inherit from Instances . Then the complete set of ClassB methods is “toString, add ”. It’s the union of all methods from the parents (generally with things to the right being chosen when there’s a conflict) . There are some languages that support the notion of Classes which can also be instances, like Ruby and Python. we can combine Classes and Instances into a single concept: an Object.
               </p>
            </div>
            <div className='backdrop-blur-sm bg-white/10 w-full h-fit text-white p-5 my-5'>
               <h2 className='sm:text-3xl text-2xl text-center py-2'>
                     Why you do not set the state directly in React.
                 </h2>
               <p>
               If i try to update state directly then it won't re-render the component.Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.So, it’s obvious from the statement that if we mutate the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React won’t be able to see that there is a change of the state and so it won’t be reflected in the original DOM until we reload .
               </p>
            </div>
            <div className='backdrop-blur-sm bg-white/10 w-full h-fit text-white p-5 my-5'>
               <h2 className='sm:text-3xl text-2xl text-center py-2'>
                    What is a unit test? Why should write unit tests?
                 </h2>
               <p>
               Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If i release such an app without thorough testing, i would have to keep fixing issues raised by i potential users.
               </p>
            </div>
        </div>
    );
};

export default Blog;