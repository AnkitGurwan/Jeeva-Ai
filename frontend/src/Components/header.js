import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-700 text-white px-8 py-4 flex justify-between items-center">
        <div className='text-xl font-bold flex items-center gap-3'>
            <img className='w-10 h-10' src="https://static.wixstatic.com/media/8ae22a_7e8887b754df4dfea093c4e73aeaaaa2~mv2.jpg/v1/fill/w_134,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screenshot%202023-09-23%20212141_edited.jpg" alt='jeeva-ai-logo' />
            <div>AI-Based Diagnosis</div>
        </div>
        <div className='text-lg font-medium'>Guest User</div>
    </header>
  );
}

export default Header;
