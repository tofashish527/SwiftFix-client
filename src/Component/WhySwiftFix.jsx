import Lottie from 'lottie-react';
import why from '../assets/lottieFiles/why.json';
import choose from '../assets/lottieFiles/choose.json';
import React from 'react';

const WhySwiftFix = () => {
    return (
//         <section className="dark:bg-gray-100 dark:text-gray-800">
// 	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
// 		<div>
// 			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Aliquip definiebas ad est</h2>
// 			<p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">Quando cetero his ne, eum admodum sapientem ut.</p>
// 		</div>
// 		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
// 			<div>
// 				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Ad vix debet docendi</h3>
// 				<p className="mt-3 text-lg dark:text-gray-600">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p>
// 				<div className="mt-12 space-y-12">
// 					<div className="flex">
// 						<div className="flex-shrink-0">
// 							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
// 								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
// 									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// 								</svg>
// 							</div>
// 						</div>
// 						<div className="ml-4">
// 							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Per ei quaeque sensibus</h4>
// 							<p className="mt-2 dark:text-gray-600">Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.</p>
// 						</div>
// 					</div>
// 					<div className="flex">
// 						<div className="flex-shrink-0">
// 							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
// 								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
// 									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// 								</svg>
// 							</div>
// 						</div>
// 						<div className="ml-4">
// 							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Cu imperdiet posidonium sed</h4>
// 							<p className="mt-2 dark:text-gray-600">Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.</p>
// 						</div>
// 					</div>
// 					<div className="flex">
// 						<div className="flex-shrink-0">
// 							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
// 								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
// 									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// 								</svg>
// 							</div>
// 						</div>
// 						<div className="ml-4">
// 							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Nulla omittam sadipscing mel ne</h4>
// 							<p className="mt-2 dark:text-gray-600">At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div aria-hidden="true" className="mt-10 lg:mt-0">
// 				<img src="https://source.unsplash.com/random/360x480" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
// 			</div>
// 		</div>
// 		<div>
// 			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
// 				<div className="lg:col-start-2">
// 					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Eam nibh gloriatur ex</h3>
// 					<p className="mt-3 text-lg dark:text-gray-600">Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p>
// 					<div className="mt-12 space-y-12">
// 						<div className="flex">
// 							<div className="flex-shrink-0">
// 								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
// 									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
// 										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// 									</svg>
// 								</div>
// 							</div>
// 							<div className="ml-4">
// 								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Cibo augue offendit has ad</h4>
// 								<p className="mt-2 dark:text-gray-600">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
// 							</div>
// 						</div>
// 						<div className="flex">
// 							<div className="flex-shrink-0">
// 								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
// 									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
// 										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// 									</svg>
// 								</div>
// 							</div>
// 							<div className="ml-4">
// 								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">At eum ferri luptatum lobortis</h4>
// 								<p className="mt-2 dark:text-gray-600">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
// 							</div>
// 						</div>
// 						<div className="flex">
// 							<div className="flex-shrink-0">
// 								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
// 									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
// 										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// 									</svg>
// 								</div>
// 							</div>
// 							<div className="ml-4">
// 								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Dicunt verterem evertitur eu sea</h4>
// 								<p className="mt-2 dark:text-gray-600">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
// 					<img src="https://source.unsplash.com/random/361x481" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </section>
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

		{/* Left Content + Right Image */}
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