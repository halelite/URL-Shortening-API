import { useEffect, useRef, useState } from "react"

function LinkLists({urls}) {

    const copyRef = useRef();
    const textRef = useRef();

    async function handleCopy() {
        copyRef.current.style.backgroundColor = "hsl(257, 27%, 26%)";
        copyRef.current.innerHTML = "Copied!";

        try {
            await navigator.clipboard.writeText(textRef.current.innerHTML);
            alert("link copied!");
        }
        catch(err) {
            console.log('failed to copy: ' + err);
        }
    }

    useEffect(() => {
        console.log(urls);
    }, [urls])

    const links = urls ? urls.map((url, index) => {
        return (
            <li key={index}>
                <p className="link">{url.longUrl}</p>
                <p ref={textRef} className="shortened-link">{url.shortUrl}</p>
                <button ref={copyRef} onClick={handleCopy} className="copy">Copy</button>
            </li>
        )
    }) : "";

    return (
        <ul className="link-list">
            {/* <li>
                <p className="link">https://www.frontendmentor.io/profile/halelite</p>
                <p className="shortened-link">shortened link</p>
                <button className="copy">Copy</button>
            </li>
            <li>
                <p className="link">https://www.linkedin.com/in/hale-sheikhi/</p>
                <p className="shortened-link">shortened link</p>
                <button className="copy">Copy</button>
            </li> */}
            {links}
        </ul>
    )
}

export default LinkLists