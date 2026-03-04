'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard, ScrollReveal, SkeletonCard } from '@/components/UIComponents';
import { Globe, Github, ExternalLink, Search, Layers, BookOpen, Code2 } from 'lucide-react';

const DOMAINS = ['All'];

const STATIC_PROJECTS = [
    {
        _id: '1',
        title: 'AI Health Monitor',
        userName: 'Jeet Patel',
        domain: 'Healthcare AI',
        problemStatement: 'Early detection of anomalies in wearable data',
        description: 'A machine learning system that analyzes continuous vitals from smartwatch sensors to predict and alert users of potential health anomalies before they become critical.',
        techStack: ['Python', 'TensorFlow', 'Next.js'],
        githubUrl: 'https://github.com/Uv-191206',
        liveUrl: 'https://project-x-vibe-build.vercel.app/'
    },
    {
        _id: '2',
        title: 'Smart Crop Yield Predictor',
        userName: 'Yuvrajsinh Rathod',
        domain: 'Agriculture AI',
        problemStatement: 'Optimizing crop yield based on micro-climate data',
        description: 'Utilizes historical weather data, soil sensors, and satellite imagery to predict crop yields and recommend precise fertilizer applications.',
        techStack: ['React', 'FastAPI', 'PyTorch'],
        githubUrl: 'https://github.com/Uv-191206',
        liveUrl: 'https://project-x-vibe-build.vercel.app/'
    },
    {
        _id: '3',
        title: 'Urban Traffic Optimizer',
        userName: 'Alice Smith',
        domain: 'Smart Cities',
        problemStatement: 'Reducing congestion through intelligent light timing',
        description: 'Analyzes real-time traffic camera feeds to dynamically adjust traffic light timings, reducing average commute times by 15%.',
        techStack: ['OpenCV', 'Node.js', 'MongoDB'],
        githubUrl: 'https://github.com/Uv-191206',
        liveUrl: 'https://project-x-vibe-build.vercel.app/'
    }
];

export default function ShowcasePage() {
    const [search, setSearch] = useState('');
    const [domainFilter, setDomainFilter] = useState('All');

    const filtered = STATIC_PROJECTS.filter(p => {
        const matchSearch = !search || p.title?.toLowerCase().includes(search.toLowerCase()) || p.description?.toLowerCase().includes(search.toLowerCase()) || p.userName?.toLowerCase().includes(search.toLowerCase());
        const matchDomain = domainFilter === 'All' || p.domain === domainFilter;
        return matchSearch && matchDomain;
    });

    return (
        <div className="page-container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="section-title">🌍 Project Showcase</h1>
                <p className="section-subtitle">Explore AI innovations built by our participants</p>
            </motion.div>

            {/* Controls */}
            <ScrollReveal>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ position: 'relative', flex: '1 1 250px' }}>
                        <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input className="glow-input" placeholder="Search projects..." value={search} onChange={e => setSearch(e.target.value)} style={{ paddingLeft: 42 }} />
                    </div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {DOMAINS.map(d => (
                            <button key={d} onClick={() => setDomainFilter(d)}
                                style={{
                                    padding: '8px 14px', borderRadius: 20, cursor: 'pointer', fontWeight: 500, fontSize: '0.82rem',
                                    border: '1px solid var(--border-glass)',
                                    background: domainFilter === d ? 'var(--accent-blue)' : 'rgba(255,255,255,0.6)',
                                    color: domainFilter === d ? 'white' : 'var(--text-secondary)',
                                    transition: 'all 0.2s',
                                }}>
                                {d}
                            </button>
                        ))}
                    </div>

                </div>
            </ScrollReveal>

            {/* Projects Grid */}
            {filtered.length === 0 ? (
                <GlassCard style={{ textAlign: 'center', padding: '3rem' }}>
                    <Globe size={48} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
                    <h3 style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>No projects found</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        Try adjusting your search or filter
                    </p>
                </GlassCard>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.25rem' }}>
                    {filtered.map((project, i) => (
                        <ScrollReveal key={project._id || i} delay={i * 0.05}>
                            <GlassCard style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                    <div>
                                        <h3 style={{ fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>{project.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: '2px 0' }}>{project.userName}</p>
                                    </div>
                                    <span className="badge">{project.domain}</span>
                                </div>

                                {project.problemStatement && (
                                    <div style={{
                                        padding: '8px 12px', borderRadius: 10, marginBottom: '0.75rem',
                                        background: 'rgba(99,102,241,0.04)', border: '1px solid rgba(99,102,241,0.1)',
                                        fontSize: '0.82rem', color: 'var(--accent-blue)',
                                    }}>
                                        <BookOpen size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                                        {project.problemStatement}
                                    </div>
                                )}

                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', flex: 1, lineHeight: 1.6, margin: '0 0 0.75rem' }}>
                                    {project.description?.length > 160 ? project.description.slice(0, 160) + '...' : project.description}
                                </p>

                                {project.techStack?.length > 0 && (
                                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                                        {project.techStack.map((t, j) => (
                                            <span key={j} style={{
                                                padding: '3px 10px', borderRadius: 12, fontSize: '0.72rem', fontWeight: 500,
                                                background: 'rgba(139,92,246,0.07)', color: '#7c3aed',
                                            }}>{t}</span>
                                        ))}
                                    </div>
                                )}

                                <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                padding: '8px 14px', borderRadius: 10, textDecoration: 'none', fontSize: '0.82rem',
                                                background: 'rgba(0,0,0,0.04)', color: 'var(--text-primary)', fontWeight: 500,
                                                display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s',
                                            }}>
                                            <Github size={14} /> GitHub
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                padding: '8px 14px', borderRadius: 10, textDecoration: 'none', fontSize: '0.82rem',
                                                background: 'var(--accent-blue)', color: 'white', fontWeight: 500,
                                                display: 'flex', alignItems: 'center', gap: 6,
                                            }}>
                                            <ExternalLink size={14} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </GlassCard>
                        </ScrollReveal>
                    ))}
                </div>
            )}
        </div>
    );
}
