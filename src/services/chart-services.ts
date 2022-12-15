import { traadApi } from '../config/api';
import { ChartResponse } from './contracts/charts';

export class ChartServices {
  async loadChartAUCData(): Promise<any> {
    return traadApi.request<ChartResponse>({
      method: 'GET',
      url: `/v1/application/chart-one`,
    });
  }

  async loadChartAvgIncomeData(): Promise<any> {
    return traadApi.request<ChartResponse>({
      method: 'GET',
      url: `/v1/application/chart-two`,
    });
  }
}
