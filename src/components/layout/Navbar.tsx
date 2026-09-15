"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { treatmentCategories, treatments } from "@/data/treatments";

const links = [{label:"About",href:"/about"},{label:"Gallery",href:"/gallery"},{label:"FAQ",href:"/faq"},{label:"Contact",href:"/contact"}];
export default function Navbar() {
 const [mobileOpen,setMobileOpen]=useState(false);
 const [treatmentsOpen,setTreatmentsOpen]=useState(false);
 const trigger=useRef<HTMLButtonElement>(null);
 const pathname=usePathname();
 const close=()=>{setMobileOpen(false);setTreatmentsOpen(false)};
 const collections= treatmentCategories.filter(category=>category!=="All");
 return <header className="lusso-header" onKeyDown={event=>{if(event.key==="Escape"){setTreatmentsOpen(false);setMobileOpen(false);trigger.current?.focus()}}}>
  <div className="lusso-nav-inner">
   <Link href="/" onClick={close} className="lusso-header-logo" aria-label="Lusso MedSpa home">
    <Image src="/lusso-logo-dark.png" alt="Lusso MedSpa" width={1696} height={1248} priority />
   </Link>
   <nav className="lusso-desktop-nav" aria-label="Main navigation">
    <Link href="/" onClick={close} aria-current={pathname==="/"?"page":undefined}>Home</Link>
    <div className="lusso-treatment-nav" onMouseEnter={()=>setTreatmentsOpen(true)} onMouseLeave={()=>setTreatmentsOpen(false)} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node|null))setTreatmentsOpen(false)}}>
     <button ref={trigger} type="button" aria-expanded={treatmentsOpen} aria-controls="treatment-mega-menu" onClick={()=>setTreatmentsOpen(value=>!value)}>Treatments</button>
     {treatmentsOpen && <div id="treatment-mega-menu" className="lusso-mega-menu">
      <div className="lusso-mega-heading"><div><span className="lusso-menu-eyebrow">THE TREATMENT COLLECTION</span><p>Find the care that speaks to you.</p></div><Link href="/treatments" onClick={close}>Explore all treatments ↗</Link></div>
      <div className="lusso-mega-grid">{collections.map(category=><section key={category}><h2>{category}</h2><ul>{treatments.filter(item=>item.category===category).map(item=><li key={item.slug}><Link href={`/treatments/${item.slug}`} onClick={close}><strong>{item.title}</strong><span>{item.description.split(". ")[0]}.</span></Link></li>)}</ul></section>)}</div>
     </div>}
    </div>
    {links.map(link=><Link key={link.href} href={link.href} onClick={close} aria-current={pathname.startsWith(link.href)?"page":undefined}>{link.label}</Link>)}
   </nav>
   <Link className="lusso-nav-book" href="/contact" onClick={close}>Request an Appointment ↗</Link>
   <button className="lusso-mobile-toggle" aria-label={mobileOpen?"Close navigation":"Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={()=>setMobileOpen(value=>!value)}>{mobileOpen?"×":"☰"}</button>
  </div>
  {mobileOpen && <nav id="mobile-navigation" className="lusso-mobile-nav" aria-label="Mobile navigation">
    <Link href="/" onClick={close}>Home</Link>
    <details><summary>Treatments</summary><Link href="/treatments" onClick={close}>Explore all treatments ↗</Link>{collections.map(category=><section key={category}><h2>{category}</h2>{treatments.filter(item=>item.category===category).map(item=><Link key={item.slug} href={`/treatments/${item.slug}`} onClick={close}><strong>{item.title}</strong><span>{item.description.split(". ")[0]}.</span></Link>)}</section>)}</details>
    {links.map(link=><Link key={link.href} href={link.href} onClick={close}>{link.label}</Link>)}
    <a href="tel:+19166644490">Call us at: {siteConfig.phone}</a>
  </nav>}
 </header>;
}
