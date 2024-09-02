import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="bg-white rounded-lg shadow m-4 mt-10">
                <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
                    <span className="text-sm text-gray-500 text-center dark:text-gray-400">
                        © 2023 <a href="" className="hover:underline">YamenMoh™</a>. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
