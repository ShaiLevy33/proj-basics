const { useState, useEffect } = React

export function MouseMonitor() {

    const [isOn, setIsOn] = useState(true)
    const [pos, setPos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        if (isOn) document.addEventListener('mousemove', updatePos)
        return () => {
            document.removeEventListener('mousemove', updatePos)
        }
    }, [isOn])

    
    function updatePos(ev) {
        const { x, y } = ev
        setPos({ x, y })
    }

    const btnText = isOn ? 'Stop' : 'Start'
    return (
        <section className="mouse-monitor">
            <h3>Mouse Monitor</h3>
            <div>
                <p>Mouse X:{pos.x}</p>
                <p>Mouse Y:{pos.y}</p>
                <button Click={() => setIsOn(isOn => !isOn)}>{btnText}</button>
            </div>
        </section>
    )
}