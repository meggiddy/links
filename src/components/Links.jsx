import React, { useState, useEffect, useRef } from "react";

function Links() {
    const containerRef = useRef()
  const [windowWidth, setWindowWidth] = useState(0);
  const [links, setLinks] = useState([
    "Link 1", "Link 2", "Link 3", "Link 4", "Link 5",
    "Link 6", "Link 7", "Link 8", "Link 9", "Link 10",
    "Link 11", "Link 12", "Link 13", "Link 14", "Link 15"
  ]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries)=>{
        for (const entry of entries){
            setWindowWidth(entry.contentRect.width)
        }
    })
    if(containerRef.current){
        resizeObserver.observe(containerRef.current)
    }
    return()=>{
        resizeObserver.disconnect()
    }
  }, []);

  const numIcons = Math.floor(windowWidth / 80);


  return (
    <div ref={containerRef} className="flex flex-row border-2">
      {links.slice(0, numIcons).map((item) => {
        return <span key={item} className="p-4">{item}</span>;
      })}
      {numIcons < links.length && (
        <span key="other" className="other p-4">
          Other({links.length - numIcons})
        </span>
      )}
    </div>
  );
}

export default Links;
