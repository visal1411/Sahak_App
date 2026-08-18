"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function ProfilePage() {
  const [skills, setSkills] = useState(['UX/UI Design', 'Product Strategy', 'Figma']);
  const [inputValue, setInputValue] = useState('');
  
  const defaultAvatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuBwsoQiOfdoZWaBL-5Dlc1umOcRIaF0SKgx93-kSCJxBcuf-3fvCUr2Vj2M14fqqNVkAeeHAQCp_z3WMfzdYI19lR_PA3mQYFAjeiIbbZOLsrEuzDDVqMd7MUpS2jMgLrtx9gm6arIx8FAnGY4nb88xYeVX4beAdIORQjyAF5a1NsQSoCmKGusFj60CboTqxsiBw6_ozZ5SlQuxrhi7z97RwOYAy8qJHDUyVVidpQ661ZDK4cEhAyJdxg";
  const [profilePic, setProfilePic] = useState(defaultAvatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [profileData, setProfileData] = useState({
    firstName: 'Sokha',
    lastName: 'Chen',
    headline: 'Senior UX/UI Designer @ TechStart',
    bio: "With over 5 years of experience in product design, I specialize in crafting user-centric digital experiences. I'm passionate about helping students transition from academia to the tech industry by bridging the gap between theory and practical design systems.",
    rate: 25,
    format: 'online'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const inputClass = (editing: boolean) => editing 
    ? 'input-glow rounded-full border border-outline-variant/30 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all px-6 py-3 bg-surface-container-lowest text-on-surface w-full font-body-md text-body-md' 
    : 'w-full bg-transparent border-none p-0 m-0 outline-none font-body-md text-body-md text-on-surface truncate';
    
  const textareaClass = (editing: boolean) => editing 
    ? 'input-glow rounded-2xl border border-outline-variant/30 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all px-6 py-4 bg-surface-container-lowest text-on-surface w-full font-body-md text-body-md resize-y' 
    : 'w-full bg-transparent border-none p-0 m-0 outline-none font-body-md text-body-md text-on-surface resize-none h-auto';

  useEffect(() => {
    const storedPic = localStorage.getItem('sahak_mentor_avatar');
    if (storedPic) setProfilePic(storedPic);

    const storedSkills = localStorage.getItem('sahak_mentor_skills');
    if (storedSkills) setSkills(JSON.parse(storedSkills));

    const storedData = localStorage.getItem('sahak_mentor_profile');
    if (storedData) setProfileData(JSON.parse(storedData));
  }, []);

  const handleActionButton = () => {
    if (isEditing) {
      localStorage.setItem('sahak_mentor_profile', JSON.stringify(profileData));
      localStorage.setItem('sahak_mentor_skills', JSON.stringify(skills));
      setIsEditing(false);
      setIsModalOpen(true);
    } else {
      setIsEditing(true);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfilePic(base64String);
        localStorage.setItem('sahak_mentor_avatar', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      setSkills([...skills, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  return (
    <div className="max-w-[1280px] mx-auto w-full p-4 md:p-10 lg:pt-10">
      {/* Header Section */}
      <header className="mb-10 lg:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Mentor Profile Management</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Update your professional details, refine your expertise, and set your mentorship availability to connect with students.</p>
        </div>
        
        {/* Floating Save Button (Desktop) */}
        <div className="hidden md:block">
          <button onClick={handleActionButton} type="button" className="flex items-center gap-4 bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] text-white pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition-opacity shadow-[0px_10px_20px_rgba(14,165,233,0.3)]">
            <span className="font-label-caps text-label-caps tracking-wider">{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
            <div className="bg-secondary text-white rounded-full p-2 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">{isEditing ? 'save' : 'edit'}</span>
            </div>
          </button>
        </div>
      </header>

      {/* Bento Grid Layout for Form */}
      <form className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-card-gap">
        {/* Left Column (Main Details) */}
        <div className="md:col-span-8 flex flex-col gap-6 md:gap-card-gap">
          {/* 1. Personal Info Section (Glass Card) */}
          <section className="bg-surface rounded-xl p-6 md:p-8 shadow-[0px_10px_30px_rgba(14,165,233,0.1)]">
            <h3 className="font-stat-display text-stat-display text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">badge</span>
              Personal Information
            </h3>
            
            {/* Avatar Upload */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div className={`relative group shrink-0 ${isEditing ? 'cursor-pointer' : ''}`} onClick={() => isEditing && fileInputRef.current?.click()}>
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-surface shadow-md">
                  <img alt="Mentor Avatar" className="w-full h-full object-cover" src={profilePic} />
                </div>
                {isEditing && (
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white">photo_camera</span>
                  </div>
                )}
              </div>
              {isEditing && (
                <div>
                  <input 
                    type="file" 
                    accept="image/png, image/jpeg, image/gif" 
                    className="hidden" 
                    ref={fileInputRef} 
                    onChange={handleImageUpload} 
                  />
                  <button onClick={() => fileInputRef.current?.click()} className="px-4 py-2 bg-surface-variant text-on-surface-variant rounded-full font-body-sm text-body-sm hover:bg-surface-dim transition-colors mb-2" type="button">Upload New Photo</button>
                  <p className="font-body-sm text-body-sm text-outline text-[12px]">JPG, GIF or PNG. Max size of 5MB.</p>
                </div>
              )}
            </div>
            
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="firstName">First Name</label>
                <input disabled={!isEditing} className={inputClass(isEditing)} id="firstName" placeholder="Enter first name" type="text" value={profileData.firstName} onChange={(e) => setProfileData({...profileData, firstName: e.target.value})} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="lastName">Last Name</label>
                <input disabled={!isEditing} className={inputClass(isEditing)} id="lastName" placeholder="Enter last name" type="text" value={profileData.lastName} onChange={(e) => setProfileData({...profileData, lastName: e.target.value})} />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="headline">Professional Headline</label>
                <input disabled={!isEditing} className={inputClass(isEditing)} id="headline" placeholder="e.g. Senior Software Engineer" type="text" value={profileData.headline} onChange={(e) => setProfileData({...profileData, headline: e.target.value})} />
              </div>
            </div>
          </section>

          {/* 2. About Me Section */}
          <section className="bg-surface rounded-xl p-6 md:p-8 shadow-[0px_10px_30px_rgba(14,165,233,0.1)]">
            <h3 className="font-stat-display text-stat-display text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">description</span>
              About Me
            </h3>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="bio">Biography</label>
              <textarea disabled={!isEditing} className={textareaClass(isEditing)} id="bio" placeholder="Share your journey, experience, and what you can offer to mentees..." rows={5} value={profileData.bio} onChange={(e) => setProfileData({...profileData, bio: e.target.value})} />
              {isEditing && <p className="font-body-sm text-body-sm text-outline text-[12px] text-right mt-1">{profileData.bio.length} / 500 characters</p>}
            </div>
          </section>
        </div>

        {/* Right Column (Skills & Settings) */}
        <div className="md:col-span-4 flex flex-col gap-6 md:gap-card-gap">
          {/* 3. Expertise & Skills */}
          <section className="bg-surface rounded-xl p-6 md:p-8 shadow-[0px_10px_30px_rgba(14,165,233,0.1)]">
            <h3 className="font-stat-display text-stat-display text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">psychology</span>
              Expertise
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Core Subjects</label>
                {/* Tag Input */}
                <div className={`flex flex-wrap gap-2 ${isEditing ? 'p-3 border border-outline-variant/30 rounded-2xl bg-surface-container-lowest min-h-[100px] focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/20' : ''} items-start transition-all`}>
                  {skills.map((skill, idx) => (
                    <span key={idx} className="rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] px-3 py-1 font-body-sm text-body-sm flex items-center gap-1 group">
                      {skill} 
                      {isEditing && (
                        <button onClick={() => removeSkill(skill)} className="text-[#0EA5E9] hover:text-primary transition-colors focus:outline-none flex items-center" type="button">
                          <span className="material-symbols-outlined text-[14px]">close</span>
                        </button>
                      )}
                    </span>
                  ))}
                  {isEditing && (
                    <input 
                      disabled={!isEditing}
                      className="border-none bg-transparent outline-none flex-1 min-w-[100px] font-body-md text-body-md p-1 focus:ring-0" 
                      placeholder="Type and press enter..." 
                      type="text" 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleAddSkill}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* 4. Mentorship Settings */}
          <section className="bg-surface rounded-xl p-6 md:p-8 shadow-[0px_10px_30px_rgba(14,165,233,0.1)]">
            <h3 className="font-stat-display text-stat-display text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">settings</span>
              Mentorship Settings
            </h3>
            <div className="flex flex-col gap-6">
              {/* Rate Input */}
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="rate">Hourly Rate (USD)</label>
                <div className="relative">
                  <span className={`font-body-md text-on-surface-variant ${isEditing ? 'absolute left-4 top-1/2 -translate-y-1/2' : 'hidden'}`}>$</span>
                  <input disabled={!isEditing} className={isEditing ? 'input-glow rounded-full border border-outline-variant/30 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all pl-8 pr-6 py-3 bg-surface-container-lowest text-on-surface w-full font-body-md text-body-md' : 'w-full bg-transparent border-none p-0 outline-none font-body-md text-body-md text-on-surface'} id="rate" placeholder="0.00" type="number" value={profileData.rate} onChange={(e) => setProfileData({...profileData, rate: parseFloat(e.target.value) || 0})} />
                  {!isEditing && <span className="absolute left-0 top-0 opacity-0 pointer-events-none">${profileData.rate}</span>} 
                  {/* Mock formatting for view mode since number input strips formatting */}
                  {!isEditing && <div className="absolute inset-0 bg-surface flex items-center"><span className="font-body-md text-body-md text-on-surface">${profileData.rate}</span></div>}
                </div>
              </div>
              
              {/* Session Format Selection */}
              <div className="flex flex-col gap-3">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Preferred Format</label>
                
                <label className={`flex items-center transition-colors group ${isEditing ? 'p-4 border border-outline-variant/30 rounded-xl cursor-pointer hover:bg-surface-variant/20' : ''} ${!isEditing && profileData.format !== 'online' ? 'hidden' : ''}`}>
                  {isEditing && <input checked={profileData.format === 'online'} onChange={() => setProfileData({...profileData, format: 'online'})} className="text-primary focus:ring-primary w-5 h-5 accent-primary" name="format" type="radio" value="online" />}
                  <div className={`${isEditing ? 'ml-3' : ''} flex flex-col`}>
                    <span className={`font-body-md text-body-md text-on-surface ${isEditing ? 'font-medium group-hover:text-primary transition-colors' : ''}`}>Online Video</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{isEditing ? 'Google Meet / Zoom' : 'Google Meet / Zoom'}</span>
                  </div>
                </label>

                <label className={`flex items-center transition-colors group ${isEditing ? 'p-4 border border-outline-variant/30 rounded-xl cursor-pointer hover:bg-surface-variant/20' : ''} ${!isEditing && profileData.format !== 'inperson' ? 'hidden' : ''}`}>
                  {isEditing && <input checked={profileData.format === 'inperson'} onChange={() => setProfileData({...profileData, format: 'inperson'})} className="text-primary focus:ring-primary w-5 h-5 accent-primary" name="format" type="radio" value="inperson" />}
                  <div className={`${isEditing ? 'ml-3' : ''} flex flex-col`}>
                    <span className={`font-body-md text-body-md text-on-surface ${isEditing ? 'font-medium group-hover:text-primary transition-colors' : ''}`}>In-Person</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{isEditing ? 'Coffee shops / Campus' : 'Coffee shops / Campus'}</span>
                  </div>
                </label>
              </div>
            </div>
          </section>
          
          {/* 5. Account Actions */}
          <div className="mt-2">
            <button 
              type="button"
              className="w-full flex items-center justify-center gap-2 p-4 rounded-xl border border-error/50 text-error hover:bg-error-container hover:text-on-error-container transition-colors font-label-caps text-label-caps"
              onClick={() => {
                // Mock logout clear and redirect
                localStorage.removeItem('sahak_mentor_profile');
                window.location.href = '/';
              }}
            >
              <span className="material-symbols-outlined text-[18px]">logout</span>
              Log Out
            </button>
          </div>
          
          {/* Mobile Save Button */}
          <div className="md:hidden mt-4 pb-[80px]">
            <button onClick={handleActionButton} type="button" className="w-full flex items-center justify-between bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] text-white pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition-opacity shadow-[0px_10px_20px_rgba(14,165,233,0.3)]">
              <span className="font-label-caps text-label-caps tracking-wider">{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
              <div className="bg-secondary text-white rounded-full p-2 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">{isEditing ? 'save' : 'edit'}</span>
              </div>
            </button>
          </div>
        </div>
      </form>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-surface rounded-3xl p-8 max-w-sm w-full shadow-2xl relative flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center mb-4 text-[#10B981]">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h3 className="font-headline-lg-mobile text-on-surface mb-2">Profile Saved</h3>
            <p className="font-body-md text-on-surface-variant mb-8">Your mentor profile details have been successfully updated.</p>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full py-3.5 bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] text-white rounded-full font-label-caps text-label-caps hover:opacity-90 transition-opacity shadow-[0px_4px_14px_rgba(14,165,233,0.3)]"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
