'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, FcGoogle } from 'lucide-react';
import { CustomInput } from './custom-input';
import { CustomButton } from './custom-button';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [isSignIn, setIsSignIn] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-5xl aspect-auto md:aspect-[3/2] bg-purple rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
            >
                {/* Back Arrow */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 left-4 md:top-8 md:left-8 text-white hover:text-gold transition-colors z-20"
                >
                    <ArrowLeft size={24} />
                </button>

                {/* Left Side: Branding */}
                <div className="w-full md:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-between text-white relative">
                    <div className="space-y-8">
                        <div className="relative h-12 md:h-16 aspect-[3/1] -ml-2">
                            <Image
                                src="/choco-smiley-logo.png"
                                alt="Choco Smiley Logo"
                                fill
                                draggable={false}
                                priority
                                className="object-contain object-left"
                            />
                        </div>
                        
                        <div className="space-y-1">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isSignIn ? 'signin-title' : 'signup-title'}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-none">
                                        {isSignIn ? 'WELCOME' : 'CREATE'}
                                    </h1>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold leading-none">
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
                                className="text-white/80 text-xs md:text-sm font-poppins max-w-xs"
                            >
                                {isSignIn 
                                    ? "Sign in to access your rewards, order history and saved favorites."
                                    : "Unlock seamless shopping: Saved addresses, order history, and curated wishlists."
                                }
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <div className="hidden md:block text-white/40 text-[0.6rem] uppercase tracking-widest font-poppins">
                        © 2025 Chocosmiley
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-[55%] bg-white/5 md:bg-white/10 backdrop-blur-sm p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {isSignIn ? (
                            <motion.div 
                                key="signin-form"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="space-y-4">
                                    <CustomInput placeholder="Email Address" type="email" />
                                    <div className="space-y-2">
                                        <CustomInput placeholder="Password" type="password" showPasswordToggle />
                                        <div className="text-right">
                                            <button className="text-xs text-white/60 hover:text-gold transition-colors">Forgot?</button>
                                        </div>
                                    </div>
                                </div>

                                <CustomButton className="w-full py-4 text-md uppercase tracking-wider">Sign In</CustomButton>

                                <div className="flex items-center gap-4 py-2">
                                    <div className="h-[1px] flex-1 bg-white/20" />
                                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">OR</span>
                                    <div className="h-[1px] flex-1 bg-white/20" />
                                </div>

                                <button className="w-full bg-white text-purple rounded-xl py-3 flex items-center justify-center gap-3 text-sm font-semibold hover:bg-white/90 transition-all active:scale-[0.98]">
                                    <Image src="https://picsum.photos/seed/google/24/24" width={20} height={20} alt="Google" className="rounded-full" />
                                    Continue with Google
                                </button>

                                <p className="text-center text-xs text-white/60 pt-4">
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
                                className="space-y-5"
                            >
                                <div className="grid grid-cols-1 gap-4">
                                    <CustomInput placeholder="Full Name" type="text" />
                                    <CustomInput placeholder="Email Address" type="email" />
                                    <CustomInput placeholder="Password" type="password" showPasswordToggle />
                                    <CustomInput placeholder="Confirm Password" type="password" />
                                </div>

                                <p className="text-[10px] leading-relaxed text-white/50 font-poppins">
                                    By continuing, you agree to ChocoSmiley’s{' '}
                                    <span className="text-gold">Terms and Service</span> and acknowledge ChocoSmiley’s{' '}
                                    <span className="text-gold">Privacy Policy</span>.
                                </p>

                                <CustomButton className="w-full py-4 text-md uppercase tracking-wider">Create Account</CustomButton>

                                <div className="flex items-center gap-4 py-1">
                                    <div className="h-[1px] flex-1 bg-white/20" />
                                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">OR</span>
                                    <div className="h-[1px] flex-1 bg-white/20" />
                                </div>

                                <button className="w-full bg-white text-purple rounded-xl py-3 flex items-center justify-center gap-3 text-sm font-semibold hover:bg-white/90 transition-all active:scale-[0.98]">
                                    <Image src="https://picsum.photos/seed/google/24/24" width={20} height={20} alt="Google" className="rounded-full" />
                                    Continue with Google
                                </button>

                                <p className="text-center text-xs text-white/60 pt-2">
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
