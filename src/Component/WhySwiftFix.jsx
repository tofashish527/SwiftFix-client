import Lottie from 'lottie-react';
import why from '../assets/lottieFiles/why.json';
import choose from '../assets/lottieFiles/choose.json';
import React from 'react';

const WhySwiftFix = () => {
    return (
<section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
				Why Choose SwiftFix?
			</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
				From minor fixes to professional services, SwiftFix brings reliable help to your doorstep.
			</p>
		</div>

		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
					What Makes SwiftFix Stand Out?
				</h3>
				<p className="mt-3 text-lg dark:text-gray-600">
					SwiftFix is built to simplify how you book trusted service providers for your everyday needs — all from one place.
				</p>

				<div className="mt-12 space-y-12">
					{/* Feature 1 */}
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">
								Easy Booking System
							</h4>
							<p className="mt-2 dark:text-gray-600">
								Schedule any service in just a few clicks. Choose your date, add special instructions, and you’re done.
							</p>
						</div>
					</div>

					{/* Feature 2 */}
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">
								Verified Service Providers
							</h4>
							<p className="mt-2 dark:text-gray-600">
								All professionals are background-checked and reviewed to ensure the best quality of service.
							</p>
						</div>
					</div>

					{/* Feature 3 */}
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">
								Track Booking History
							</h4>
							<p className="mt-2 dark:text-gray-600">
								View all your past and pending services with real-time status and provider details.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<Lottie animationData={why} loop={true} style={{width:'500px'}}></Lottie>
			</div>
		</div>

		{/* Reverse Layout */}
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
						Fully Customized Experience
					</h3>
					<p className="mt-3 text-lg dark:text-gray-600">
						SwiftFix offers tailored services based on your area, budget, and needs — making it convenient and efficient.
					</p>

					<div className="mt-12 space-y-12">
						{/* Feature 4 */}
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">
									Instant Notifications
								</h4>
								<p className="mt-2 dark:text-gray-600">
									Receive real-time booking confirmations, reminders, and service updates directly in your inbox.
								</p>
							</div>
						</div>

						{/* Feature 5 */}
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">
									Flexible Cancellation
								</h4>
								<p className="mt-2 dark:text-gray-600">
									Plans changed? Cancel or reschedule your service easily with no extra charges.
								</p>
							</div>
						</div>

                            {/* Feature 6 */}
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                                            Secure Payment Integration
                                        </h4>
                                        <p className="mt-2 dark:text-gray-600">
                                            Pay safely through our trusted gateways and track your payment history with complete transparency.
                                        </p>
                                    </div>

                                </div>


					</div>
				</div>

				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<Lottie animationData={choose} loop={true} style={{width:'500px'}}></Lottie>
				</div>
			</div>
		</div>
	</div>
</section>

    );
};

export default WhySwiftFix;