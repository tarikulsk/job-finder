import React from 'react';

const Blog = () => {
    return (
        <div className='grid md:grid-cols-2 mt-8'>
            <div >
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        When Should We Use "Contest API"?
                    </div>
                    <div className="collapse-content">
                        <p>The main idea of using the context is to allow your components to access global data and re-render when that global data is changed. Context solves the props drilling problem: when you have to pass down props from parents to children.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is Custom Hook?
                    </div>
                    <div className="collapse-content">
                        <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is The Use of "useRef"?
                    </div>
                    <div className="collapse-content">
                        <p>he useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is The Use of "useMemo"?
                    </div>
                    <div className="collapse-content">
                        <p>The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution.</p>
                    </div>
                </div>

            </div>
            <div>
                <img src="https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966" alt="" />
            </div>

        </div>
    );
};

export default Blog;