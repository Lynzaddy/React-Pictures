import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
      Authorization: 'Client-ID apLitDVZz9M_PBhkW22-n5fxe_g_E67sRaiC_pTWZ1Q',
   },
});
