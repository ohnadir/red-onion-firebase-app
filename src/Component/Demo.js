import React from "react";

const Demo = () => {
  return (
        <div>
            <ul
                class="nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4"
                id="pills-tab3"
                role="tablist">
                    <li class="nav-item" role="presentation">
                        <button type="button" class="
                            nav-link
                            block
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            w-full
                            md:w-auto
                            px-6
                            py-3
                            my-2
                            md:mr-2
                            focus:outline-none focus:ring-0
                            active"
                            id="pills-home-tab3"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home3"
                            role="tab"
                            aria-controls="pills-home3"
                            aria-selected="true">Home
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button type="button" class="
                            nav-link
                            block
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            w-full
                            md:w-auto
                            px-6
                            py-3
                            my-2
                            md:mx-2
                            focus:outline-none focus:ring-0"
                            id="pills-profile-tab3"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile3"
                            role="tab"
                            aria-controls="pills-profile3"
                            aria-selected="false">Profile
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button type="button" class="
                            nav-link
                            block
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            w-full
                            md:w-auto
                            px-6
                            py-3
                            my-2
                            md:ml-2
                            focus:outline-none focus:ring-0"
                            id="pills-contact-tab3"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact3"
                            role="tab"
                            aria-controls="pills-contact3"
                            aria-selected="false">Contact
                        </button>
                    </li>
            </ul>
            <div class="tab-content" id="pills-tabContent3">
                <div
                    class="tab-pane fade show active"
                    id="pills-home3"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab3">
                        Tab 1 content button version
                </div>
                <div
                    class="tab-pane fade"
                    id="pills-profile3"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab3">
                        Tab 2 content button version
                </div>
                <div
                    class="tab-pane fade"
                    id="pills-contact3"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab3">
                        Tab 3 content button version
                </div>
            </div>
        </div>
  );
};

export default Demo;
