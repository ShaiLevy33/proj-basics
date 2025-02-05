
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./cmps/Home.jsx"
import { AnimalTable } from "./cmps/AnimalTable.jsx"
import {SeasonClock} from './cmps/SeasonClock.jsx'
import {CountDown} from './cmps/CountDown.jsx'
import {MouseMonitor} from './cmps/MouseMonitor.jsx'
const { useState } = React

export function RootCmp() {

    const [isShow, setIsShow] = useState(true)

    console.log('render')

    return (
        <section className="app main-layout">
            <AppHeader />
            <main>
                <Home />
                <AnimalTable />
                <SeasonClock />
                <CountDown/>
                <MouseMonitor/>
            </main>
        </section>
    )
}