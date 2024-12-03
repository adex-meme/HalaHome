import request from "./request";

export const getPageData = (options: { keyword: string }) => {
  const { keyword } = options;

  return request.post<
    unknown,
    {
      users: Array<{ first_name: string }>;
      user_total: number;
      groups: Array<{ group_id: string; user_count: number }>;
      group_total: number;
    }
  >("/apis/v1/group/index/get_group_info", {
    keyword,
  });
};
