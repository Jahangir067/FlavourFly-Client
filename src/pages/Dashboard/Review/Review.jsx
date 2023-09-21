
const Review = () => {
    return (
        <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto max-w-2xl">
                <div className="text-center">
                    <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                        Provide a Feedback
                    </h2>
                </div>

                {/* Card */}
                <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
                    <form>
                        <div className="mb-4 sm:mb-8">
                            <label htmlFor="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Full Name</label>
                            <input type="text" id="hs-feedback-post-comment-name-1" className="py-2  border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Full Name" required />
                        </div>

                        <div className="mb-4 sm:mb-8">
                            <label htmlFor="hs-select-label" className="block text-sm font-medium mb-2 dark:text-white">Rating</label>
                            <select className="py-3 border px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                <option>select</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="hs-feedback-post-comment-textarea-1" className="block mb-2 text-sm font-medium dark:text-white">Comment</label>
                            <div className="mt-1">
                                <textarea id="hs-feedback-post-comment-textarea-1" name="hs-feedback-post-comment-textarea-1" rows="3" className="py-3 border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Leave your comment here..."></textarea>
                            </div>
                        </div>

                        <div className="mt-6 grid">
                            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800">Submit</button>
                        </div>
                    </form>
                </div>
                {/* End Card */}
            </div>
        </div>
    );
};

export default Review;