import React from "react";

const Blogs = () => {
    return (
        <div className="text-blue-700 m-10">
            <h3 className="font-semibold text-xl my-2">Que: How will you improve the performance of a React Application?</h3>
            <p className="font-semibold">Ans: In react application,we can get a very fast UI by default.However,as an application grows, we may encounter some performance issues.We can keep component local where necessary.Using the callback hook we can improve the performance.code-spliting is another important optimization technique for a react application. </p>
            <h3 className="font-semibold text-xl my-2">What are the different ways to manage a state in a React application?</h3>
            <p className="font-semibold">Ans: State is data that indicates the configuration of the application in any moment in time.There are four main types of state we need to properly manage in React apps:
                Local (UI) state: Local state is data we manage in one or another component.It is most often managed in React using the useState hook.
                Global (UI) state: Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app or in multiple components at least.
                Server state: Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                URL state: Data that exists on our URLs, including the pathname and query parameters.</p>
            <h3 className="font-semibold text-xl my-2">Que: How does prototypical inheritance work?</h3>
            <p className="font-semibold">Ans: Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                For example, we can write a simple prototypical relationship between two objects, user and premiumUser, using the ._proto_ function. Each of these objects has their own properties which would be shared among all accounts at that tier: all users have access to stream shows, showAccess = true, and all premiumUsers have advertisements disabled, ads = false.
                The prototypical relationship here ensures that premiumUser inherits the showAccess property set from user without having to set it manually at the premium tier.As it returns true, we can see that premiumUser has inherited this property from user.</p>
            <h3 className="font-semibold text-xl my-2">Que: What is a unit test? Why should write unit tests?</h3>
            <p className="font-semibold">Ans: Unit testing is a software testing method.the individual components of software are tested in unit test. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.
                Unit tests are a kind of living documentation of the product. To learn what functionality is provided by one module or another, developers can refer to unit tests to get a basic picture of the logic of the module and the system as a whole. It saves time and money.It also reduces code complexity.</p>
            <h3 className="font-semibold text-xl my-2">Que: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
            <p className="font-semibold">Ans:React</p>
        </div>
    )
}

export default Blogs;