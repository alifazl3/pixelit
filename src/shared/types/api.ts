export type ApiSource = "mock";

export type ApiMeta = {
  source: ApiSource;
  requestedAt: string;
};

export type ApiResponse<TData> = {
  data: TData;
  meta: ApiMeta;
};

export type ApiService<TData> = {
  list(): Promise<ApiResponse<TData[]>>;
};
