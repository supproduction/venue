export const responsePageApi = api => ({type: "RESPONSE_PAGE_API", api});
export const requestPageApi = params => ({type: "REQUEST_PAGE_API", params});
export const requestChangeDeadline = deadline => ({type: "REQUEST_CHANGE_DEADLINE", deadline});
export const responseChangeDeadline = deadline => ({type: "RESPONSE_CHANGE_DEADLINE", deadline});