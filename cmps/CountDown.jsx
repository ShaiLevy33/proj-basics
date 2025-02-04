const { useState, useEffect, useRef} = React

export function CountDown() {


    const [count, setCount] = useState(10);
    const intervalIdRef = useRef(null);

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setCount(prevCount => {
                if (prevCount === 0) {
                    clearInterval(intervalIdRef.current);
                    onDone();
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);

        return () => clearInterval(intervalIdRef.current);
    }, []);

    function onDone() {
        console.log('Done!');
    }

    return (
        <section>
            <h2>Count-Down</h2>
        <div style={{ color: count <= 6 ? 'red' : 'black' }}>
            {count}
        </div>
        </section>
    )


}