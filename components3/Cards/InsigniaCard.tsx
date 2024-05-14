import Link from 'next/link';
import { newRoutes } from '@/utils/routes';

function InsigniaCard() {
    return (
        <div className="experiencia__contenedor__right__grande">
            <div className="experiencia__contenedor__right__grande__card">
                <h2 className="tituloh2">Colecciona momentos, diviértete y sube de nivel</h2>
                <h6 className="tituloh6">Cada experiencia te recompensa con una insignia única. Acumula
                insignias,  gana acceso a Experiencias Secretas y mucho más …</h6>
                <div className="boton ">
                    <Link href={newRoutes.insignias}>INSIGNIAS SIBARITTA</Link>
                </div>
            </div>
        </div>
    );
}

export default InsigniaCard;