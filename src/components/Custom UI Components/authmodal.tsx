'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, XIcon } from 'lucide-react';
import { CustomInput } from './custom-input';
import { CustomButton } from './custom-button';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [isSignIn, setIsSignIn] = useState(true);

    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }
        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-md touch-none"
            />
            {/* Modal Container */}
            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-xl md:max-w-4xl lg:max-w-5xl max-h-[90vh] md:aspect-[1/2] bg-purple rounded-[1rem] overflow-y-auto md:overflow-hidden overscroll-contain shadow-2xl flex flex-col md:flex-row z-10 custom-scrollbar"
            >
                {/* Back Arrow */}
                <button 
                    onClick={onClose}
                    className="hidden md:block absolute top-8 left-8 text-white hover:text-gold transition-colors z-20"
                >
                    <ArrowLeft size={24} />
                </button>
                <button 
                    onClick={onClose}
                    className="md:hidden sticky top-0 ml-auto p-2 text-white z-20"
                >
                    <XIcon size={24} />
                </button>

                {/* Left Side: Branding */}
                <div className="w-full md:w-[50%] p-6 -mt-10 md:mt-0 md:p-8 md:px-12 lg:px-24 flex flex-col justify-center text-white relative">
                    <div className="space-y-3 md:space-y-4">
                        <div className="relative h-10 md:h-16 aspect-[3/1] ml-0 md:ml-2 mb-4 md:mb-10">
                            <Image
                                src="/choco-smiley-logo.png"
                                alt="Choco Smiley Logo"
                                fill
                                draggable={false}
                                priority
                                className="object-contain object-left"
                            />
                        </div>
                        
                        <div className="space-y-0 md:space-y-1">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isSignIn ? 'signin-title' : 'signup-title'}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-none">
                                        {isSignIn ? 'WELCOME' : 'CREATE'}
                                    </h1>
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gold leading-none">
                                        {isSignIn ? 'BACK.' : 'PROFILE.'}
                                    </h1>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.p 
                                key={isSignIn ? 'signin-desc' : 'signup-desc'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-white/80 text-[10px] md:text-sm font-poppins max-w-xs pb-2 md:pb-4"
                            >
                                {isSignIn 
                                    ? "Sign in to access your rewards, order history and saved favorites."
                                    : "Unlock seamless shopping: Saved addresses, order history, and curated wishlists."
                                }
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <div className="block text-white/40 text-[0.6rem] tracking-widest font-poppins mt-0 md:mt-4">
                        © 2026 Chocosmiley
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-[50%] p-6 px-10 md:p-8 md:px-12 lg:px-24 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {isSignIn ? (
                            <motion.div 
                                key="signin-form"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-3 md:space-y-2"
                            >
                                <div className="space-y-8">
                                    <CustomInput placeholder="Email Address" type="email" />
                                    <div className="space-y-1 md:space-y-2">
                                        <CustomInput placeholder="Password" type="password" showPasswordToggle />
                                        <div className="text-right">
                                            <button className="text-[10px] md:text-xs text-white/80 hover:text-gold transition-colors">Forgot?</button>
                                        </div>
                                    </div>
                                </div>

                                <CustomButton className="w-full py-2.5 md:py-3" showArrow>Sign In</CustomButton>

                                <div className="flex items-center gap-2 py-1 md:py-2">
                                    <div className="h-[1px] flex-1 bg-white/80" />
                                    <span className="text-[9px] md:text-[10px] text-white/80 font-bold font-poppins uppercase tracking-wider">OR</span>
                                    <div className="h-[1px] flex-1 bg-white/80" />
                                </div>

                                <CustomButton className="w-full bg-white hover:bg-white/90 py-2.5 md:py-3" leadingIcon={<Image src="/google.png" alt="Google" width={16} height={16} draggable={false}/>}>Continue with Google</CustomButton>

                                <p className="text-center text-[10px] md:text-xs text-white/60 pt-2 md:pt-4">
                                    New to ChocoSmiley?{' '}
                                    <button 
                                        onClick={() => setIsSignIn(false)}
                                        className="text-gold underline underline-offset-4 font-semibold"
                                    >
                                        Sign Up
                                    </button>
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="signup-form"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4 md:space-y-2"
                            >
                                <div className="grid grid-cols-1 gap-8">
                                    <CustomInput placeholder="Full Name" type="text" />
                                    <CustomInput placeholder="Email Address" type="email" />
                                    <CustomInput placeholder="Password" type="password" showPasswordToggle />
                                    <CustomInput placeholder="Confirm Password" type="password" />
                                </div>

                                <p className="text-[9px] md:text-[10px] leading-relaxed text-center text-white/50 font-poppins">
                                    By continuing, you agree to ChocoSmiley’s{' '}
                                    <span className="text-gold">Terms and Service</span> and acknowledge ChocoSmiley’s{' '}
                                    <span className="text-gold">Privacy Policy</span>.
                                </p>

                                <CustomButton className="w-full py-2.5 md:py-3" showArrow>Create Account</CustomButton>

                                <div className="flex items-center gap-2 py-1">
                                    <div className="h-[1px] flex-1 bg-white/80" />
                                    <span className="text-[9px] md:text-[10px] text-white/80 font-bold uppercase tracking-wider">OR</span>
                                    <div className="h-[1px] flex-1 bg-white/80" />
                                </div>

                                <CustomButton className="w-full bg-white hover:bg-white/90 py-2.5 md:py-3" leadingIcon={<Image src="/google.png" alt="Google" width={16} height={16} draggable={false}/>}>Continue with Google</CustomButton>

                                <p className="text-center text-[10px] md:text-xs text-white/60 pt-1 md:pt-2">
                                    Already have an account?{' '}
                                    <button 
                                        onClick={() => setIsSignIn(true)}
                                        className="text-gold underline underline-offset-4 font-semibold"
                                    >
                                        Sign In
                                    </button>
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}