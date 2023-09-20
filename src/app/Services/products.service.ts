import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  ProductList: IProduct[];

  constructor() {
    this.ProductList = [
      {
        id: 1,
        name: 'Drawing 1',
        quantity: 1,
        price: 1999,
        img: 'https://previews.dropbox.com/p/thumb/ACARf_Hm4hgtctGn8CJEE0smZAWm-v5MEDR0AKO-gDAX8l65fnpogtjYuuhJOAlT7kjt6ZqrRqkvCctAUgh_HFnqrOPXtc2jnA6roBLF-sxFBzLCwZT-GLUHoHS4IBIU10TIC9mz6ML3oy7SXTM4ZapSdeTAB_pr6EuIzt8UFw6LrLAqeAI95ULHgU12jV1THEIL2D627baMgGuyqEq7GcedbTT494QYqsekFjDmeC6aBf4Tpbp14jEvQLLz6jnNb-TFQcdgTlou6_8YRG-7GRsNxRFJhdfSyR_XNu780_VSYQ7MyrFI397XUPd4FZ4cuk43vNmRO0d5aqbsKcdciX--/p.jpeg',
        categoryID: 1,
      },
      {
        id: 15,
        name: 'Drawing 2',
        quantity: 0,
        price: 1999,
        img: 'https://previews.dropbox.com/p/thumb/ACAgsOsi4VwzTw-PPa15_NK_lF4bVbaQQC_9NO3kF2PfB9vKuE3bbGMX0pJCv43uQFTvLwgBnt1Gjm-lkHWlamFFU06hSyZCigiZbacL0j92pVFcp43iaJYyYVYx-Xw4nNGYB_6-3ATyuWUuFfGMg2VLZrrLCha8G22V6jvAi1XMdJ3b4beZMGaK_yX35YgtpAB4_DWhsPjaPy01zk1JTjXbsW4U8wzeEstDkZ49CIPJuHkcyONNmc5ovIl87ec3kgNkMSCg-6DHXUVaE2SUbm_HagxmY0UaJfIOBFC4yrGYoUgjCljRYkNTUFeFDdIF-7fEL_IeKQVg3xLZQbaRVDqU/p.jpeg',
        categoryID: 1,
      },
      {
        id: 2,
        name: 'Drawing 3',
        quantity: 5,
        price: 2090,
        img: 'https://previews.dropbox.com/p/thumb/ACC5G15x0YPcdI4B1Y398aErBAVZtkAR5N8AOmmmeDjEgy5Kz8Va6D9pbmMhHfGDh8PlN60DhPccGAGk6sdnYySo2979SMbFjl2DB1awmxSGEhrBGBVa1WFjm9lcN4HbaJisMNUk9SdUJYeoO3r6-JDinCoknTQmSaPE5DyF-4HEJslzb9Hb1dleYvl8MfeAZ1WiM0_-Qjb409jFP3X6OEOjdxBpalfpR7_GUKzLuh59GX2wTHeNlhIg5Z79er_3orwfUm4e9tUsqaipFu19xioWb-07OBmV9ZKYskRxqx7ztl9fPY_AHgIgOW4DSt-Y1f29CuoFINY_OXDyafmpxZQX/p.jpeg',
        categoryID: 1,
      },
      {
        id: 3,
        name: 'Drawing 4',
        quantity: 15,
        price: 9099,
        img: 'https://previews.dropbox.com/p/thumb/ACCSBqN-5mUPAO18g3y1IwT1Sxx3s8a6RezjHMVVpYeVA_RJATX7LZyp8w3DvZfOQWH0n-Mlshy07kaaWcHufXt-XUCOjDaY8w0mchbrBXJbJRPIsZP_AjFDu4XYifGgR6mgiP0YQN7tgRLoyNM_Hae-yS3dka5C9l_XfVsMywQzwR78ug2h_iuWWnvOJDJnnd7KyGwyM5SA7HozD5MXHvR5GKaUiPtVB_R5NZttErXcZE30Cy1LUSzvF4YuX1ZtKiuxhDm6p7qUqP35Cj08YHb6D-pKtk97oAncWew_vms_NGfpj1xshmydq2h2CJcPzjSjAfkWOmLq1LAkXCjxjDXCbmvpXwtwfNTpHELfTrrt1w/p.jpeg',
        categoryID: 2,
      },
      {
        id: 14,
        name: 'Drawing 5',
        quantity: 15,
        price: 9099,
        img: 'https://previews.dropbox.com/p/thumb/ACBA0XQAwwV9nzZQj5goLhsALvqj6AAa5MasxUevE6l4zopcab5dHuaoPeCl6eb2KqwyUnGBcrsvcFOqOsk9NTq5TiYk5mVT2vrI34-7RKNayJN3os1UTut6KlEvnyIzEfGjdTiPfpyPQ31OWK_kkE5HKQMiEzyjgx9Wzftyd05olhbIltlEqwumSkz4f8iyaAqsEZAGdFtIFkWKI7_7mPFnpiDXfWHmnR5MeygLMbgCW9IpZC3Lod6b8o-WG3UdLhA6Qb2b5UOBAXY8cvN3sXKx6oTwUuLNjsiEMxXnGUui8FVCnZDYrPVfSDPrax-lLMbyvC0QLASN9U2rKtwllXM5ahDk3v-KoZy4-czvvkVaBQ/p.jpeg',
        categoryID: 2,
      },
      {
        id: 4,
        name: 'Drawing 6',
        quantity: 0,
        price: 1900,
        img: 'https://previews.dropbox.com/p/thumb/ACCarsukMMxAb_GNRtRQTSsSMoD_T8vj3ECO19j4IuzVFeHfwnUIc4j5SlWPdMLgAoBg0__-jYgTLe_84ivPJurB-qzobPvU7LYZ3IK88W0JLYBWnjV_5OnTLsh23PTZfN0-aJpJUjP_Wel4VxilrOClg0C8ScBBBoOvxbWFL1EqHWrzNxaYstDY9-SewU6rgxeNjPOm77xoBA1Orl_zePah1LcIa4bI4b9ztsdBOYqe76JQL4fb2e6uiM8SaWA7pgWGlD3kUTyX8ba-2-5my1XdjAH5X-B-9z-NgToLSTODNQTgQKcmnraNAWESeKvfxAI177QrpunlbtPOoiv5LWnHOIeSrZCWFYICa9Dsyzf2sQ/p.jpeg',
        categoryID: 2,
      },
      {
        id: 5,
        name: 'Drawing 7',
        quantity: 1,
        price: 290,
        img: 'https://previews.dropbox.com/p/thumb/ACAQMFSjpL7rGmaUV5XZqjusk4jaRko-t3H03qSCWCF0j8EGIPdQ2R28grsDSNPqT_K1zrOeVqRLJycpsoGKDcDjqecsUKOOsxbcEU2sObPCbClTFktYMIPzCQFCWCVqfnDIAYfIUipdT3Jqoove9V0V1jjLKlqUUaorcab1YXAsPRjoG1eZvBChR91DHQLWf2V82DuF8zS0JJSL5Nexob_G2oY_nokNJ5X3qhtzq7oq_v4JP7yKngbpCAinrfBtrfTYiHkUwuUIoAf-YKdovOFa00apJJ8Fx3ttB85XLFHTSupfEGj3q6cGXgI3z7G81XM6GkymJUlcjx4YU3w97YB-n81l2SgEcj4Nhr7Dmbo1Kg/p.jpeg',
        categoryID: 3,
      },
      {
        id: 13,
        name: 'Drawing 8',
        quantity: 3,
        price: 290,
        img: 'https://previews.dropbox.com/p/thumb/ACDsMX5lF5u4D_kTdpskttlW3WOV_5u3xoObpN4AfM-IEPx-QeSmNOknLnh4yPqFhYli-PIyaaQVePMAglAraxnSEiSHKycho9jdyVxbJeBlqd6CfCJsvqKh8kG7ZuLRA-CunZtxYx00ClOfj_d7nnxXzJf6THsky2x1qYlBaH1zOlasXuvMQWpzHkp1KKZ19iPjRDRQdoFemdd5VnFr5CTp52y7Jgb2UhM5t_ievAUPcPVbLyMQXNsWkEOZRhk5MFSCfeOTiY315PwrgOm_waXFVTNRPOLs8lFMGF9uBjK_weq0UerSXjPMjIEuNyeYvdPThL5jCIXJbIE83_MidiKy/p.jpeg',
        categoryID: 3,
      },
      {
        id: 6,
        name: 'Drawing 9',
        quantity: 0,
        price: 9100,
        img: 'https://previews.dropbox.com/p/thumb/ACCHEpsSKa2ILFVNZSHInh2RiPRcgWUK1rgzFfuaSTjIET3nCVHQ8J3cQvt_GP6jC3cvcfH70zSpqbrZQPNKmkjRfGXmN1HcAiv_nUoaKcd1HqoBY7rqrqqvI2yW0I2gnJ9aOuVXsa-9nABtoQYn5modw5ieYLcTPdkTLgAuKbCxMG_B2SpMmj-y8BLxk2vEX5OLEpfuvaXG3iWj-G7d6YQ3mv_TH9KYsouzqggEwhwu4x-IbzXn-4WxindRnfLPlex73e_x01WgkkJSmfiySMWQQwanrJ0e2vh7vTP6PFIRUgE2PZKsUXoRqGolA5NN3HdkxSgJXXAnz_DoODlQI5tYNzMJ3BbJh7KL9xDJ13Q2IQ/p.jpeg',
        categoryID: 3,
      },
    ];
  }
  getProductsByCatID(catID: number): IProduct[] {
    if (catID == 0) {
      return this.ProductList;
    } else {
      return this.ProductList.filter((prd) => prd.categoryID == catID);
    }
  }
  getProductByID(prodID: number): IProduct | undefined {
    return this.ProductList.find((prod) => prod.id == prodID);
  }
  getProductsIDs():number[]{
    let prdIDs=this.ProductList.map(prd=>prd.id);
    return prdIDs;
  }
  decrease(prdQuant: number): number {
    if (prdQuant >= 1) {
      prdQuant = prdQuant - 1;
    }
    return prdQuant;
  }
  isProductExist(id: number): boolean {
    return this.getProductByID(id) ? true : false;
  }
}
