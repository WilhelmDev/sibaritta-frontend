import axios from "axios";
import DetailsCard from "@/components/organisms/details/DetailsCard";
import DetailsCardDestok from "@/components/organisms/details/DetailsCardDestok";
import DetailsInfo from "@/components/organisms/details/DetailsInfo";
import { IDetalle } from "@/interface/reservacion";
import { useRouter } from "next/router";
import { useEffect } from "react";


interface IDetalleProps {
  data: IDetalle;
}

const Index = ({ data }: IDetalleProps) => {

  const router = useRouter();

  const SecurityPrivileges = () => {
      const user_id = localStorage.getItem("fk_typeuser");
  
      // user_id === "1" ? router.push("/") : "";
      user_id === "2"?router.push("/home_partner"):"";
      user_id === "3" ? router.push("/admin/admin_home") : "";
    };
  
    useEffect(() => {
      SecurityPrivileges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  
  return (
    
    <div>
      <div className="laptop:hidden">
        <DetailsCard data={data} />
      </div>
      <div>
        <DetailsCardDestok data={data} />
      </div>
      
      <DetailsInfo data={data} />
    </div>
  );
};

export default Index;

export async function getServerSideProps({ query }: any) {
  const apiUrl = `${process.env.NEXT_PUBLIC_URL}/v1/experience/slug`;
  const response = await axios.get(apiUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      slug: query.slug,
    },
  });
  const data = response.data.data;

  return {
    props: {
      data,
    },
  };
}
