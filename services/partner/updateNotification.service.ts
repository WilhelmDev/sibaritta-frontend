import { baseApi } from '@/lib/baseApi';
import getConfig from '@/utils/getConfig';

const updatePartnerNotify = async (id: any, read: any) => {
  try {
    const read_socio = {
      read_partner: read.read_partner,
    };

    const result = await baseApi.put(
      `v1/notification/${id}`,
      read_socio,
      getConfig()
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

export { updatePartnerNotify };
