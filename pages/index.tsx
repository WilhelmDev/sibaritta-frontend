import ModalSession from '@/components/molecules/ModalSession';
import ModalRegister from '@/components/molecules/session/ModalRegister';
import HomeAbout from '@/components/organisms/HomeAbout';
import HomeBanner from '@/components/organisms/HomeBanner';
import HomeBusiness from '@/components/organisms/HomeBusiness';
import HomeGastronomy from '@/components/organisms/HomeGastronomy';
import HomeSocial from '@/components/organisms/HomeSocial';
import CookisModal from '@/components/socio/CookisModal';
import { useNavbarContext } from '@/context/navbar.context';
import useModalCookies from '@/hook/socio/useModalCookies';
import { useObserver } from '@/hook/useObserver';
import { ICity } from '@/interface/city.interface';
import { IExprecience } from '@/interface/experience.interface';
import { baseApi } from '@/lib/baseApi';
import { goToSection } from '@/lib/utils';
import SecurityPrivileges from '@/security/SecurityPrivileges';
import { fetchExperienceByCategory } from '@/services/experience.service';
import { formatearFecha } from '@/utils/formaterDate';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';


interface homeProps {
  city: ICity[];
}

export default function Home({ city }: homeProps) {
  const [visibleRight, setVisibleRight] = useState(false);
  const [indexSelected, setIndexSelected] = useState(1);
  const [categoryData, setCategoryData] = useState<IExprecience[]>([]);
  // const [categoryIndex, setCategoryIndex] = useState<any>(1);
  const [selectedCity, setSelectedCity] = useState<{ id: number } | null>(null);
  const [selected, setSelected] = useState<Date | undefined>();
  const [count, setCount] = useState<number>(1);
  const [previousIndexSelected, setPreviousIndexSelected] =
    useState(indexSelected);
  const selectCityId = selectedCity?.id;
  const dateFormart = selected ? formatearFecha(selected) : undefined;
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegistro, setopenRegistro] = useState(false);
  const [openConfirmacion, setOpenConfirmacion] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const [auttenti, setauttenti] = useState(false);

  const { cookiesModal,  closeModal , openModalCookis} = useModalCookies()

  const autenticationUser = () => {
    setauttenti(true);
  };

  //login
  const openModalLogin = () => {
    setOpenLogin(true);
    closeModalRegistro();
  };
  const closeModalLogin = () => {
    setOpenLogin(false);
  };

  //registro
  const openModalRegistro = () => {
    setopenRegistro(true);
    closeModalLogin();
  };
  const closeModalRegistro = () => {
    setopenRegistro(false);
  };

  // confirmarcion
  const openModalConfirmacion = () => {
    setOpenConfirmacion(true);
    closeModalRegistro();
  };

  const closeModalConfirmacion = () => {
    setOpenConfirmacion(false);
  };

  //forgot

  const openModalForgot = () => {
    setOpenForgot(true);
    closeModalLogin();
  };

  const closeModalForgot = () => {
    setOpenForgot(false);
  };




  useEffect(() => {
    if (!localStorage.getItem("cookis")) {
      localStorage.setItem("cookis", "false");
    }

    const cookiss = localStorage.getItem("cookis");
    if (cookiss === "false") {
      openModalCookis();
    }
    const modal_validate = localStorage.getItem("modal_validate");
    if(modal_validate){
      openModalLogin()
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedCount =
          indexSelected !== previousIndexSelected ? 1 : count;

        const params = {
          fk_category: indexSelected,
          count: updatedCount,
          ...(selectCityId && { selectCityId }),
          ...(dateFormart && { dateFormart }),
          // selectCityId: selectCityId && selectCityId,
        };

        const data = await fetchExperienceByCategory(params);

        setCategoryData(data.data);
        if (indexSelected !== previousIndexSelected) {
          setPreviousIndexSelected(indexSelected);
          setCount(updatedCount);
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    fetchData();
  }, [indexSelected, count, selectedCity, selected]);

  const { setActiveSection, scrolltoSectionFromOtherPage } = useNavbarContext();
  const { setElements, entries } = useObserver({
    rootMargin: '-13% 0px -80% 0px',
  });

  useEffect(() => {
    const elements = document.querySelectorAll('[data-section]');
    setElements(elements);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target.getAttribute('data-section');
        setActiveSection(String(section));
      }
    });
  }, [entries, setActiveSection]);

  useEffect(() => {
    if (scrolltoSectionFromOtherPage) {
      goToSection(scrolltoSectionFromOtherPage);
    }
  }, [scrolltoSectionFromOtherPage]);

  const openSideBard = () => {
    setVisibleRight(true);
    // document.body.style.overflow = "hidden";
  };

  return (
    <SecurityPrivileges>
      <main className='  bg-[#252127] main-page '>
        <HomeBanner
          indexSelected={indexSelected}
          setIndexSelected={setIndexSelected}
          setCategoryData={setCategoryData}
        />
        <HomeGastronomy
          indexSelected={indexSelected}
          categoryData={categoryData}
          city={city}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selected={selected}
          setSelected={setSelected}
          setCount={setCount}
          count={count}
        />
        <HomeBusiness />
        <HomeSocial />
      </main>
      <CookisModal visible={cookiesModal} closeModal={closeModal} />
      {openLogin && (
          <ModalSession
            closeModalLogin={closeModalLogin}
            openModalRegistro={openModalRegistro}
            openRegistro={openRegistro}
            openLogin={openLogin}
            openModalForgot={openModalForgot}
          />
        )}
        {openRegistro && (
          <ModalRegister
            openModalLogin={openModalLogin}
            closeModalRegistro={closeModalRegistro}
            openLogin={openLogin}
            openRegistro={openRegistro}
            openModalConfirmacion={openModalConfirmacion}
            setautenti={autenticationUser}
          />
        )}
    </SecurityPrivileges>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await baseApi.get<ICity>('/v1/city');
    const city = response.data.data; // Assuming the API response directly contains the data

    return {
      props: {
        city,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        city: null,
      },
    };
  }
};
