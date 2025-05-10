import { Cafe } from "@/types/cafe";
import styles from "./CafeView.module.css"

type CafeViewProps = {
    cafe: Cafe
}

function CafeView({cafe}: CafeViewProps) {
    return(
        <>
            <h2>{cafe.name}</h2>
            <p className={styles.review}>{cafe.review}</p>
        </>
    )

}

export default CafeView;