import styles from './sidenavstyle.module.css';

export function SideNav() {
    return (
        <div>
            <div className="relative bg-gray-50 dark:bg-slate-900 pattern">
                <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
                    <a href="#about" className="flex aspect-square min-h-[32px] w-16 flex-col focus:bg-sky-50 items-center justify-center gap-1 rounded-md p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 ">
                        <small className="text-center text-xs font-medium"> Profile </small>
                    </a>
                    <a href="#portfolio" className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
                        <small className="text-center text-xs font-medium"> Portfolio </small>
                    </a>

                    <a href="#experience" className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
                        <small className="text-center text-xs font-medium"> Experience </small>
                    </a>
                    <hr className="dark:border-gray-700/60" />
                    <a href="#home" className="flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900 rounded-md dark:text-gray-400 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">       
                        <small className="text-xs font-medium">Home</small>
                    </a>
                </nav>
            </div>
        </div>
    )

    
}
