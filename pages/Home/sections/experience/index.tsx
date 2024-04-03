import SectionListBase from "@/components2/SectionListBase";
import { v4 as uuid } from "uuid";

const items = [
  "La palabra “Sibarita”  deriva del latín Sybarīta, y este del griego Sybarítēs que significa “Síbaris”, antigua colonia griega ubicada en una ciudad italiana en el golfo de Tarento, que era reconocida por su riqueza y la exquisitez de sus habitantes, por sus gustos y alto aprecio por la buena comida y bebida.",
  "En nuestra comunidad, los Sibarittas somos personas apasionadas por encontrar experiencias que superen nuestras expectativas, en lugares auténticos, que nos brindan un servicio y calidad excepcional.",
];

const SectionExperience = () => {
  return (
    <div>
      <SectionListBase
        bg_img="/partner_home/cucharaComida.jpg"
        title="¿Qué significa Sibaritta?"
        items={items}
        key={uuid()}
      />
    </div>
  );
};

export default SectionExperience;
