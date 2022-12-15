import { AxiosResponse } from 'axios';

import { traadApi } from '../config/api';
import { ChartResponse } from './contracts/charts';

export class ChartServices {
  async loadChartAUCData(): Promise<AxiosResponse<ChartResponse, any>> {
    const response = await traadApi.request<ChartResponse>({
      method: 'GET',
      url: `/v1/application/chart-one`,
    });

    return response;
  }

  async loadChartAvgIncomeData(): Promise<AxiosResponse<ChartResponse, any>> {
    const response = await traadApi.request<ChartResponse>({
      method: 'GET',
      url: `/v1/application/chart-two`,
    });

    return response;
  }
}
