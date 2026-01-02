import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Phone, Star } from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between font-sans text-slate-900 bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Star className="text-white w-6 h-6 fill-current" />
                        </div>
                        <span className="font-black text-2xl tracking-tighter text-slate-900">HANDYMAN <span className="text-blue-600">MELBOURNE</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
                        <Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link>
                        <Link href="#about" className="hover:text-blue-600 transition-colors">Why Us</Link>
                        <Link href="tel:0400000000" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all">
                            <Phone className="w-4 h-4" /> 0400 000 000
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                            <Check className="w-4 h-4" /> Top Rated Local Service
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
                            Professional <br />
                            <span className="text-blue-600">Handyman</span> <br />
                            Services.
                        </h1>
                        <p className="text-slate-500 text-xl md:text-2xl mb-12 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                            Trusted by Melbourne homeowners for reliable repairs, maintenance, and installations. Quality work, guaranteed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="#contact" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 group">
                                Get a Fast Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60">
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-blue-600" />
                                <span className="font-bold text-sm">Fully Insured</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-blue-600" />
                                <span className="font-bold text-sm">Police Checked</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-blue-600" />
                                <span className="font-bold text-sm">Melbourne Wide</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-blue-100 rounded-[40px] rotate-3 z-0" />
                        <div className="relative z-10 aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
                            <div className="w-full h-full bg-[url('/handyman_hero.jpg')] bg-cover bg-center" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-slate-100">
                            <div className="flex gap-1 text-yellow-400 mb-2">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                            <div className="font-black text-2xl text-slate-900">4.9/5 Rating</div>
                            <div className="text-slate-500 font-bold uppercase text-xs tracking-widest">Based on 200+ Reviews</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="w-full py-32 bg-slate-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">One Call Fixes It All.</h2>
                        <p className="text-slate-500 text-lg font-medium">From the smallest repairs to general home maintenance, we handle the jobs you don't have time for.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Home Maintenance", desc: "Patching walls, fixing doors, hanging art, and general property upkeep.", icon: <Check className="w-8 h-8 text-blue-600" /> },
                            { title: "Furniture Assembly", desc: "Professional flat-pack assembly for IKEA, Fantastic Furniture, and more.", icon: <Star className="w-8 h-8 text-blue-600" /> },
                            { title: "Installations", desc: "TV mounting, blind installation, shelving, and smoke alarm battery changes.", icon: <MapPin className="w-8 h-8 text-blue-600" /> }
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="mb-6">{s.icon}</div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight">{s.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="w-full py-32 px-4">
                <div className="max-w-5xl mx-auto bg-blue-600 rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">Ready to get those <br /> jobs done?</h2>
                        <p className="text-blue-100 text-xl md:text-2xl mb-12 max-w-xl mx-auto font-medium">Send us a quick message or photo of the job for a free estimate within 24 hours.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="tel:0400000000" className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-lg flex items-center justify-center gap-3">
                                <Phone className="w-5 h-5" /> Call 0400 000 000
                            </Link>
                            <Link href="#contact" className="px-10 py-5 bg-blue-700 text-white rounded-2xl font-black text-lg hover:bg-blue-800 transition-all border border-blue-400/30 flex items-center justify-center gap-3">
                                Online Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-16 bg-white px-4 border-t border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                            <Star className="text-white w-5 h-5 fill-current" />
                        </div>
                        <span className="font-black text-xl tracking-tighter text-slate-900 uppercase">Handyman Melbourne</span>
                    </div>
                    <div className="text-slate-400 font-bold text-sm tracking-widest uppercase">© 2026 Professional Home Services</div>
                </div>
            </footer>
        </main>
    );
}
