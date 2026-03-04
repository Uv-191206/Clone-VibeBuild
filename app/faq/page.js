'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/UIComponents';
import { ChevronDown } from 'lucide-react';

const faqs = [
    { q: 'What is VibeBuild?', a: 'VibeBuild is an AI-driven workshop platform where teams collaborate to solve real-world problems using AI and machine learning. Teams work on assigned domains, build solutions, and showcase their projects.' },
    { q: 'How do I submit my project?', a: 'Forward your github repository (public access) link to the coordinator in order to verify your submission and make a request for showcase.' },
    { q: 'What domains are available?', a: 'The workshop covers four AI domains: Healthcare AI, Agriculture AI, Smart Cities, and Education Tech. Each team is pre-assigned a domain to work on.' },
    { q: 'How does the AI Chatbot help?', a: 'The AI Chatbot acts as a static flow diagram guiding users step-by-step through learning how GitHub, Vercel, and Antigravity works.' },
    { q: 'Can I see other teams\' projects?', a: 'Yes! The Showcase page displays all submitted projects publicly. You can view their summaries and explore their GitHub repositories or Live Demos.' },
    { q: 'Who do I contact for help?', a: 'Reach out to the workshop organizers or Student Coordinators directly via the contact links in the Footer.' },
];

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="page-container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="section-title">❓ Frequently Asked Questions</h1>
                <p className="section-subtitle">Everything you need to know about VibeBuild</p>
            </motion.div>

            <div style={{ maxWidth: 750, margin: '0 auto' }}>
                {faqs.map((faq, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                        <motion.div
                            className="glass-card"
                            style={{ marginBottom: '0.75rem', overflow: 'hidden', cursor: 'pointer' }}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <div style={{
                                padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, margin: 0, paddingRight: '1rem' }}>{faq.q}</h3>
                                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                    <ChevronDown size={20} color="var(--text-muted)" />
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div style={{
                                            padding: '0 1.5rem 1.25rem',
                                            color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6,
                                            borderTop: '1px solid var(--border-glass)',
                                            paddingTop: '1rem',
                                        }}>
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}
