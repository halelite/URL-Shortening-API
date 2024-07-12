import { useEffect, useRef, useState } from "react"
import LinkLists from "./LinkLists";

function AddLink() {

    // bitly api
    const apiKey = '03b0fb94cf27488a54f213cfbb9e585a8e0cdf7c';

    const [urls, setUrls] = useState(() => {
        return localStorage.getItem('urls') ? JSON.parse(localStorage.getItem('urls')) : []
    });
    const linkInput = useRef("");
    const ref = useRef();
    const btnRef = useRef();

    // 'https://en.wikipedia.org/wiki/JavaScript'

    useEffect(() => {
        localStorage.setItem('urls', JSON.stringify(urls));
    }, [urls])

    function fetchShortenedLink (longUrl) {
        if(longUrl == "") {
            ref.current.style.display = 'block';
            linkInput.current.classList.add('empty');
            btnRef.current.style.marginTop = "10px"
        } else {
            if(linkInput.current.classList.contains('empty')) {
                linkInput.current.classList.remove('empty');
            }
            btnRef.current.style.marginTop = "0";
            ref.current.style.display = 'none';

            fetch(`https://api-ssl.bitly.com/v4/shorten`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                long_url: longUrl
            })
            })
            .then(res => {
                if(res.ok) {
                    return res.json()
                } else {
                    throw Error(res.status);
                }
            })
            .then(data => {
                console.log(data.link);

                setUrls([
                    ...urls,
                    {longUrl, shortUrl: data.link}
                ]);
            })
            .catch(err => console.log(err))
        }
    }




        // function fetchShortenedLink (longUrl) {
        // if(longUrl == "") {
        //     ref.current.style.display = 'block';
        //     linkInput.current.classList.add('empty');
        //     btnRef.current.style.marginTop = "10px"
        // }
        // else {
        //     if(linkInput.current.classList.contains('empty')) {
        //         linkInput.current.classList.remove('empty');
        //     }
        //     btnRef.current.style.marginTop = "0";
        //     ref.current.style.display = 'none';

        //     linkInput.current.value = "";
        //     fetch(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * 100)}`)
        //     .then(res => {
        //         if(res.ok) {
        //             return res.json()
        //         } else {
        //             throw Error(res.status);
        //         }
        //     })
        //     .then(data => {
        //         console.log(data.title);

        //         setUrls([
        //             ...urls,
        //             {longUrl, shortUrl: data.title}
        //         ]);
        //     })
        //     .catch(err => console.log(err))
        //     }
        // }

    return (
        <>
            <div className="addLink">
                <div className="input-container">
                    <input
                    ref={linkInput} 
                    type="text" 
                    placeholder="Shorten a link here..." 
                    />
                    <span id="error" ref={ref}>
                        Please add a link
                    </span>
                </div>

                <button ref={btnRef}
                onClick={() => fetchShortenedLink(linkInput.current.value)} 
                className="shorten-btn">Shorten It!</button>
            </div>
            <LinkLists urls={urls} />
        </>
    )
}

export default AddLink