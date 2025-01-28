import React from 'react'

function pricing() {
  return (
    <div>
        <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Pricing & Plans</h2>
            <p class="mt-4 text-lg leading-relaxed text-gray-600">Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>

        <!-- lg+ -->
        <div class="hidden mt-16 lg:block">
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="py-8 pr-4"></th>

                        <th class="px-4 py-8 text-center">
                            <span class="text-base font-medium text-blue-600"> Free </span>
                            <p class="mt-6 text-4xl font-bold">$0</p>
                            <p class="mt-2 text-base font-normal text-gray-500">Per month</p>
                        </th>

                        <th class="px-4 py-8 text-center">
                            <span class="text-base font-medium text-blue-600"> Team </span>
                            <p class="mt-6 text-4xl font-bold">$99</p>
                            <p class="mt-2 text-base font-normal text-gray-500">Per month</p>
                        </th>

                        <th class="px-4 py-8 text-center bg-gray-900 rounded-t-xl">
                            <span class="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full"> Popular </span>
                            <p class="mt-6 text-4xl font-bold text-white">$150</p>
                            <p class="mt-2 text-base font-normal text-gray-200">Per month</p>
                        </th>

                        <th class="px-4 py-8 text-center">
                            <span class="text-base font-medium text-blue-600"> Enterprise </span>
                            <p class="mt-6 text-4xl font-bold">$490</p>
                            <p class="mt-2 text-base font-normal text-gray-500">Per month</p>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td class="py-4 pr-4 font-medium border-b border-gray-200">Website number</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">01</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">10</td>

                        <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">50</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
                    </tr>

                    <tr>
                        <td class="py-4 pr-4 font-medium border-b border-gray-200">Server storage</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">100 GB</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">500 GB</td>

                        <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">1 TB</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
                    </tr>

                    <tr>
                        <td class="py-4 pr-4 font-medium border-b border-gray-200">Database</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">15</td>

                        <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">Unlimited</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
                    </tr>

                    <tr>
                        <td class="py-4 pr-4 font-medium border-b border-gray-200">Unmetered Bandwidth</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td class="py-4 pr-4 font-medium border-b border-gray-200">SSD Disk</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td class="py-4 pr-4 font-medium border-b border-gray-200">VCPUS Fontworld</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td class="py-4 pr-4 font-medium border-b border-gray-200">WordPress install</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td class="py-4 pr-4 font-medium border-b border-gray-200">Server speed</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                        <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td class="px-4 py-4 text-center border-b border-gray-200">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td class="py-6 pr-4"></td>

                        <td class="px-4 py-6 text-center">
                            <a href="#" title="" class="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started
                                <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </td>

                        <td class="px-4 py-6 text-center">
                            <a href="#" title="" class="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started
                                <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </td>

                        <td class="px-4 py-6 text-center text-white bg-orange-500 rounded-b-xl">
                            <a href="#" title="" class="inline-flex items-center font-semibold text-white">
                                Get Started
                                <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </td>

                        <td class="px-4 py-6 text-center">
                            <a href="#" title="" class="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started
                                <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- xs to lg -->
    <div class="block mt-12 border-t border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
        <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">
                <span class="text-sm font-medium text-blue-600"> Free </span>
                <p class="mt-2 text-xl font-bold">$0</p>
                <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
            </div>

            <div class="px-2 py-2">
                <span class="text-sm font-medium text-blue-600"> Team </span>
                <p class="mt-2 text-xl font-bold">$99</p>
                <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
            </div>

            <div class="px-2 py-2">
                <span class="text-sm font-medium text-blue-600"> Popular </span>
                <p class="mt-2 text-xl font-bold">$150</p>
                <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
            </div>

            <div class="px-2 py-2">
                <span class="text-sm font-medium text-blue-600"> Enterprise </span>
                <p class="mt-2 text-xl font-bold">$490</p>
                <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
            </div>
        </div>

        <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">Website number</p>
        </div>

        <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">01</div>

            <div class="px-2 py-2">10</div>

            <div class="px-2 py-2">100</div>

            <div class="px-2 py-2">Unlimited</div>
        </div>

        <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">Server storage</p>
        </div>

        <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">100 GB</div>

            <div class="px-2 py-2">500 GB</div>

            <div class="px-2 py-2">1 TB</div>

            <div class="px-2 py-2">Unlimited</div>
        </div>

        <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">Database</p>
        </div>

        <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">-</div>

            <div class="px-2 py-2">15</div>

            <div class="px-2 py-2">Unlimited</div>

            <div class="px-2 py-2">Unlimited</div>
        </div>

        <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">Unmetered bandwidth</p>
        </div>

        <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">-</div>

            <div class="px-2 py-2">
                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div class="px-2 py-2">
                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div class="px-2 py-2">
                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">SSD Disk</p>
        </div>

        <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">-</div>

            <div class="px-2 py-2">
                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div class="px-2 py-2">
                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div class="px-2 py-2">
                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">VCPUS Fontworld</p>
        </div>

        <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">-</div>

            <div class="px-2 py-2">
                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div class="px-2 py-2">
                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div class="px-2 py-2">
                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">WordPress install</p>
        </div>

        <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">-</div>

            <div class="px-2 py-2">
                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div class="px-2 py-2">
                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div class="px-2 py-2">
                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-1 py-2 sm:px-4">
                <span class="text-sm font-medium text-blue-600"> Free </span>
                <p class="mt-2 text-xl font-bold">$0</p>
                <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                <a href="https://buy.stripe.com/test_bIY8xl64Z5M0bh6aEE" title="" class="flex items-center justify-center w-full px-1 py-2 mt-5 text-xs text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
            </div>

            
            <div class="px-1 py-2 sm:px-4">
                <span class="text-sm font-medium text-blue-600"> Growth </span>
                <p class="mt-2 text-xl font-bold">$9.99</p>
                <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                <a href="https://buy.stripe.com/test_fZe6pd50Veiwad27st" title="" class="flex items-center justify-center w-full px-1 py-2 mt-5 text-xs text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
            </div>

            <div class="px-1 pt-2 pb-4 sm:px-4">
                <span class="text-sm font-medium text-blue-600"> Enterprise </span>
                <p class="mt-2 text-xl font-bold">$99.99</p>
                <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                <a href="https://buy.stripe.com/test_bIY28X793a2gfxmcMO" title="" class="flex items-center justify-center w-full px-1 py-2 mt-5 text-xs text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default pricing