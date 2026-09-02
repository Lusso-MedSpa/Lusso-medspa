"use client";
import {useEffect,useRef} from "react";
export default function CursorGlow(){
 const glow=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const media=window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
  let frame=0;
  const move=(event:PointerEvent)=>{if(!media.matches)return;cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{if(glow.current){glow.current.style.transform=`translate3d(${event.clientX-120}px,${event.clientY-120}px,0)`;glow.current.style.opacity="1"}})};
  const hide=()=>{if(glow.current)glow.current.style.opacity="0"};
  window.addEventListener("pointermove",move,{passive:true});document.addEventListener("pointerleave",hide);window.addEventListener("blur",hide);
  return ()=>{cancelAnimationFrame(frame);window.removeEventListener("pointermove",move);document.removeEventListener("pointerleave",hide);window.removeEventListener("blur",hide)};
 },[]);
 return <div ref={glow} className="lusso-cursor-glow" aria-hidden="true"/>;
}