import { AxiosResponse } from 'axios';

import { traadApi } from '../config/api';
import { NoticesAndPendingWidgetResponse } from './contracts/tables';

export class TableServices {
  async loadNoticesAndPendingWidgetData(): Promise<
    AxiosResponse<NoticesAndPendingWidgetResponse, any>
  > {
    const response = await traadApi.request<NoticesAndPendingWidgetResponse>({
      method: 'GET',
      url: `/application/table-two`,
    });

    return response;
  }
}
