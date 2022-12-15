import { AxiosResponse } from 'axios';

import { ICustomerOverview } from '../components/tables/CustomersOverview';
import { traadApi } from '../config/api';
import { NoticesAndPendingWidgetResponse } from './contracts/tables';

export class TableServices {
  async loadNoticesAndPendingWidgetData(): Promise<
    AxiosResponse<NoticesAndPendingWidgetResponse, any>
  > {
    const response = await traadApi.request<NoticesAndPendingWidgetResponse>({
      method: 'GET',
      url: `/v1/application/table-two`,
    });

    return response;
  }

  async loadCustomerOverviewData(): Promise<AxiosResponse<ICustomerOverview>> {
    const response = await traadApi.request<ICustomerOverview>({
      method: 'GET',
      url: '/v1/application/table-one',
    });

    return response;
  }
}
