import Image from 'next/image';
import classes from './MainNavigation.module.css';
import avatar from '../../image/small_avatar.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MainNavigation = () => {
    const router = useRouter();

    return <header className={classes.header}>
        <div className={classes.avatar_container}>
            <div>
                <Image className={classes.image} src={avatar} width="90rem" height="90rem" alt="avatar"></Image>
            </div>
            <div>
                <h1>Supakit Pavaputanon Na Mahasarakam</h1>
                <h2>Enterprise Solution Application Engineer</h2>
            </div>
        </div>
        <nav className={classes.main_navigation}>
            <ul>
                <li className={router.pathname == "/" ? "active" : ""}>
                    <Link href='/'>Overview</Link>
                </li>
                <li>
                    <Link href='/my-work'>My Works</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;