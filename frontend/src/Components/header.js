import React from 'react';
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-900 bg-opacity-80 text-white px-4 md:px-8 py-4 flex justify-between items-center">
        <div className='text-xl font-bold flex items-center gap-2 md:gap-3'>
            <img className='w-9 md:w-10 h-9 md:h-10' src="https://static.wixstatic.com/media/8ae22a_7e8887b754df4dfea093c4e73aeaaaa2~mv2.jpg/v1/fill/w_134,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screenshot%202023-09-23%20212141_edited.jpg" alt='jeeva-ai-logo' />
            <div>AI-Based Diagnosis</div>
        </div>
        <div className='text-lg font-medium flex items-center gap-1 md:gap-2'>
          <FaRegUser/>
          <div>Guest</div>
        </div>
    </header>
  );
}

export default Header;
